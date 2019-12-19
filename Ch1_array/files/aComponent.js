import React from "react"


class aComponent extends React.Component{
    constructor() {
        super();
        this.state = {
            x : [1, 2, 3],
           y : [5,5,10]     
       }
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="name" />

                    <input type="submit" />

                
                </form>

                <div>
                    ABC
                </div>

               <tlx-chart chart-type="PieChart">
                   chart-editable 
                   chart-columns="${['Element','Percentage']}" 
                   chart-data="${[
                    ['Nitrogen',0.78],
                    ['Oxygen',0.21],
                    ['Other',0.01]]}"
                </tlx-chart>

            </div>


        )
    }

}