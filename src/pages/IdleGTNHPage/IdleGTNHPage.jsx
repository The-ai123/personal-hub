import './IdleGTNHPage.css'
import { useState } from 'react'



function IdleGTNHPage(){

    const [menu, setCurrentMenu] = useState(<ProductionMenu/>);

    function mainNavigationClickEvent(input){
        switch(input){
            case "production":
                setCurrentMenu(<ProductionMenu/>)
                break;
            case "storage":
                setCurrentMenu(<ProductionMenu/>)
                break;
            case "mining":
                setCurrentMenu(<ProductionMenu/>)
                break;
            case "mining":
                setCurrentMenu(<ProductionMenu/>)
                break;
            default:
                setCurrentMenu(<ProductionMenu/>)
                console.warn("Invalid input to mainNavigationClickEvent")
        }
    }



    return(
        <><div class="background"></div><div class="GTNHEverything">
            <div class="GTNHNavigation">
                <table><tbody>
                    <tr><th></th></tr>
                    <tr onClick={() => mainNavigationClickEvent("production")} class="GTNHNavigationButtonRow"><td class="GTNHNavigationButton">Production</td></tr>
                    <tr onClick={() => mainNavigationClickEvent("storage")} class="GTNHNavigationButtonRow"><td class="GTNHNavigationButton">Storage</td></tr>
                    <tr onClick={() => mainNavigationClickEvent("mining")} class="GTNHNavigationButtonRow"><td class="GTNHNavigationButton">Mining</td></tr>
                    <tr onClick={() => mainNavigationClickEvent("production")} class="GTNHNavigationButtonRow"><td class="GTNHNavigationButton">Exploration</td></tr>
                </tbody></table>
            </div>
            <div class="GTNHMainGame">
                {menu}
            </div>
        </div>
        
        </>
    )
}

function ProductionMenu() {
    return(
        <>
        <div class="GTNHMenu">
            <center><h1 class="GTNHMenuHeader">Production</h1></center>
            <div class="GTNHProductionTierNavigation">
                <div class="GTNHProductionTierNavigationButton">Stone</div>
                <div class="GTNHProductionTierNavigationButton">Steam</div>
            </div>
        </div>   
        </>
    )
}

export default IdleGTNHPage;