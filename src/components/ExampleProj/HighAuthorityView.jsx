import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import CustomHighView from "./CustomHighView";
import MonthView from "./MonthView";
import { DatePicker } from "antd";
import Select from "react-select";

const HighAuthorityView = () => {


    const getData = () => {
        return {
            location: { value: "", label: "" },
            campus: { value: "", label: "" },
            deanery: { value: "", label: "" },
            department: { value: "", label: "" }
        }
    }



    const [state, setState] = useState({
        startDate: "",
        endDate: "",
        locations: [
            { value: "1", label: "Bangaloore" }, { value: "2", label: "Lavasa" }, { value: "3", label: "Delhi" }
        ],
        campuses: [
            { value: "1", label: 'Bannaraghatta Campus', }, { value: "2", label: "Kengeri Campus" }, { value: "3", label: "Central Campus", },
            { value: "4", label: "Lavasa Campus", }, { value: "5", label: "NCR Campus" }
        ],
        deaneryList: [
            { value: "1", label: "School of Science" }, { value: "2", label: "School of Computer Science" }
        ],
        departmentList: [
            { value: "1", label: "Computer Science", }, { value: "2", label: "Economics" }, { value: "3", label: "Chemisty", }, { value: "4", label: "Physics" },
            { value: "5", label: "Mathematics" }
        ],
        data: getData,
    });





    const [gridFlag, setGridFlag] = useState(false);
    const SearchEmpAttendanceData = () => {
        setGridFlag(true);
    };

    const dateHandler = (date, name) => {
        const newState = { ...state };
        if (name === "startDate" || name === "endDate") {
            newState[name] = date;
        }
        setState(newState);
        console.log(state);
    };

    const selectHandler = (event, name) => {
        const newState = { ...state }
        // if (name === "location") {
        newState.data[name] = event;
        // }
        // else if(name==="campus")
        setState(newState)
    }

    return (
        <div>
            <div className="row p-2 mx-3">
                <div className="col-md-5">
                    <div className="row p-2">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label> *Start Date </label>
                                <DatePicker
                                    className="form-control"
                                    placeholder="Start Date"
                                    aria-label="start date"
                                    value={state.startDate || ""}
                                    onChange={(event) => dateHandler(event, "startDate")}
                                // style={{ minWidth: "150px" }}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>*End Date</label>
                                <DatePicker
                                    className="form-control"
                                    placeholder="End Date"
                                    aria-label="end date"
                                    value={state.endDate || ""}
                                    onChange={(event) => dateHandler(event, "endDate")}
                                // style={{ minWidth: "150px" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <div className="row p-2">
                        <div className="col-md-6">
                            <label> *Location </label>
                            <Select
                                placeholder="Select"
                                name="locations"
                                styles={{ menuPortal: (base) => ({ ...base, zIndex: 99999 }) }}
                                menuPortalTarget={document.body}
                                options={state.locations || []}
                                value={state.data.location}
                                // value={state}
                                onChange={(event) => selectHandler(event, "location")}
                            />
                        </div>
                        <div className="col-md-6 ">
                            <label> *Campus </label>
                            <Select
                                name="campuses"
                                styles={{ menuPortal: (base) => ({ ...base, zIndex: 99999 }) }}
                                menuPortalTarget={document.body}
                                options={state.campuses || []}
                                value={state.data.campus || ""}
                                onChange={(event) => selectHandler(event, "campus")}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mx-3">
                <div className="col-md-5">
                    <div className="row p-2">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>* Denary</label>
                                <Select
                                    name="deanery"
                                    styles={{ menuPortal: (base) => ({ ...base, zIndex: 99999 }) }}
                                    menuPortalTarget={document.body}
                                    options={state.deaneryList || []}
                                    value={state.data.deanery || ""}
                                    onChange={(event) => selectHandler(event, "deanery")}
                                />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label> *Department</label>
                                <Select
                                    name="department"
                                    styles={{ menuPortal: (base) => ({ ...base, zIndex: 99999 }) }}
                                    menuPortalTarget={document.body}
                                    options={state.departmentList || []}
                                    value={state.data.department || ""}
                                    onChange={(event) => selectHandler(event, "department")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row p-2">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label> Employee Name</label>
                                <input type="text" className="form-control" />

                            </div>
                        </div>
                            <div className="col-md-6">
                        <div className="form-group">
                                <label> Employee Id</label>
                                <div>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row p-2">
                <div className="d-flex justify-content-center">
                    <button className="btn btn-success" onClick={SearchEmpAttendanceData}>
                        Search
                    </button>
                </div>
            </div>
            {
                gridFlag ? (
                    //    <div className='ag-theme-alpin' style={{width: "100%", height: 500}}>
                    //      <AgGridReact
                    //      columnDefs={columnDefs}
                    //      rowData={rowdata}
                    //      animateRows={true}
                    //      />
                    //    </div>
                    <MonthView />
                ) : (
                    ""
                )
            }
        </div >
    );
};

export default HighAuthorityView;