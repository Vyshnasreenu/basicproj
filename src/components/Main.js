class Main{
     CalculatingDays(daysInWeek,indexOfStartDay){
        const day=[];
        for (let ind = 0; ind < daysInWeek.length; ind++) {
            const j=(indexOfStartDay+ind)%7;                    ///  Calculating which day start the month and we are pushing in different Days array...
                day.push(daysInWeek[j])   
          }
          return day;
     }
     CountDays(lastDayOfMonth){
        let dates=[]
        for (let i = 1; i <=lastDayOfMonth; i++) {
            dates.push(i)
       }
       return dates;
     }
     CalculatingdaysInMonth(noOfWeeksInMonth,remainingDays,startDayOfMonth){
        let weeksDTO=[]; console.log(startDayOfMonth)
        for (let wk = 0; wk < noOfWeeksInMonth; wk++) {
              startDayOfMonth.map((item)=>{
               weeksDTO.push(item)
              })       
        }
        for (let remain = 0; remain < remainingDays; remain++) {
           weeksDTO.push(startDayOfMonth[remain])     
        }
        return weeksDTO;
     }
}
export default new Main();