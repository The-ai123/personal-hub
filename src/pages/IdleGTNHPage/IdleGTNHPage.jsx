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
                setCurrentMenu(<StorageMenu/>)
                break;
            case "mining":
                setCurrentMenu(<ProductionMenu/>)
                break;
            case "exploration":
                setCurrentMenu(<ExplorationMenu/>)
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
                    <tr onClick={() => mainNavigationClickEvent("exploration")} class="GTNHNavigationButtonRow"><td class="GTNHNavigationButton">Exploration</td></tr>
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
                <div class="GTNHProductionTierNavigationButton">LV</div>
                <div class="GTNHProductionTierNavigationButton">MV</div>
                <div class="GTNHProductionTierNavigationButton">HV</div>
            </div>
        </div>   
        </>
    )
}

function ProductionStoneMenu(){

}


function StorageMenu() {
    return(
        <>
        <div class="GTNHMenu">
            <center><h1 class="GTNHMenuHeader">Storage</h1></center>
            <div class="GTNHProductionTierNavigation">
                <div class="GTNHProductionTierNavigationButton">Chest</div>
                <div class="GTNHProductionTierNavigationButton">Logistic Network</div>
                <div class="GTNHProductionTierNavigationButton">Applied Energistics</div>
            </div>
        </div>   
        </>
    )
}

function ExplorationMenu() {
    return(
        <>
        <div class="GTNHMenu">
            <center><h1 class="GTNHMenuHeader">Exploration</h1></center>
            <div class="GTNHProductionTierNavigation button">
                <div class="GTNHProductionTierNavigationButton">Overworld</div>
                <div class="GTNHProductionTierNavigationButton">Nether</div>
                <div class="GTNHProductionTierNavigationButton">Twilight Forest</div>
            </div>
            <ExplorationOverworldMenu/>
        </div>   
        </>
    )
}

function ExplorationOverworldMenu(){
    return(
        <>
        <div class="GTNHExplorationOverworldMenu">
            <div class="GTNHExplorationTop">
                <div class="GTNHExplorationExploreButton button">Explore</div>


            </div>
            
        </div>
        </>
    )
}


export default IdleGTNHPage;

