import { logDOM } from "@testing-library/react";
import { createContext, useState } from "react";

import protein1 from "../assets/img/elite_rich_chocolate_2.3_kg_2.jpg"
import protein2 from "../assets/img/gold-whey-standard-2270kg-optimum-nutrition.jpg"
import protein3 from "../assets/img/muscletech-nitrotech-choc-2lb_480x480.webp"
import protein4 from "../assets/img/muscletech-plant-protein-choc-2lb_480x480.png"
import protein5 from "../assets/img/muscletech-whey-gold-cookies-cream-5lb_480x480.webp"

import energy1 from "../assets/img/muscletech-vaporx5-blue-razz_600x.webp"
import energy2 from "../assets/img/muscletech-100-creatine_480x480.webp"
import energy3 from "../assets/img/muscletech-celletech-fruitpunch-3lb_480x480.png"
import energy4 from "../assets/img/muscletech-euphoriq-boogieman-punch_480x480.webp"
import energy5 from "../assets/img/c4-original-30-servings-180g-cellucor.webp"

import health1 from "../assets/img/daily-vita-min-90-tabs-scitec-nutrition.jpg"
import health2 from "../assets/img/ashwagandha-60-caps-scitec-nutrition.jpg"
import health3 from "../assets/img/omega-3-100-caps-scitec-nutrition.jpg"
import health4 from "../assets/img/ZMA-Professional-60-Capsules-Applied-Nutrition.webp"
import health5 from "../assets/img/Vitamin-D3-90-Tablettes-Applied-Nutrition-300x300.webp"

import snack1 from "../assets/img/574931_Barebells_Protein_Bar_Creamy_Crisp_Front.jpg"
import snack2 from "../assets/img/333005_GNC_Total_Lean_Lean_Shake_25_Swiss_Chocolate_Case_Front.jpg"
import snack3 from "../assets/img/tortilla.jpg"
import snack4 from "../assets/img/588821_Legendary_Foods_Protein_Sweet_Roll_Cinnamon_case_Front.jpg"
import snack5 from "../assets/img/596702_Siren_Cookie_Dough_case_Front.webp"

import gymwear1 from "../assets/img/InterlockTech6ShortsGSBlackA5A6L-BB2J0575_4d02f776-14ad-412d-91de-9e59707673b4_640x.webp"
import gymwear2 from "../assets/img/LegacyDropArmHoodie-GSBlack-A5A2V-BB2J-1415_550ee629-097d-4be7-8c99-85a92485dd25_640x.webp"
import gymwear3 from "../assets/img/EverydayHoldallMLightGreyI3A2H-GBCM49_640x.webp"
import gymwear4 from "../assets/img/ArrivalMarlT-ShirtGSUtilityBlue-GSFreshBlueMarlA2A1I-UCM61571_640x.jpg"
import gymwear5 from "../assets/img/ArrivalSlimWovenPantSilhouetteGreyA2A1N-GBP4-1147_640x.webp"

import gear1 from "../assets/img/prod.jpg"
import gear2 from "../assets/img/prod1.jpg"
import gear3 from "../assets/img/prod3.jpg"
import gear4 from "../assets/img/kit-haltères-et-barres-50-kg-musculation.jpg"
import gear5 from "../assets/img/kit-haltères-musculation-20-kg-filetées.jpg"


export const MyContext = createContext()

export const MyProvider = ({ children }) => {


    // && protein
    let proteinProd1 = {
        id: 1,
        name: "Protein 1",
        price: 1000,
        image: protein1,
        type: "protein",
        quantity: 0,
    }
    let proteinProd2 = {
        id: 2,
        name: "Protein 2",
        price: 2000,
        image: protein2,
        type: "protein",
        quantity: 0,
    }
    let proteinProd3 = {
        id: 3,
        name: "Protein 3",
        price: 3000,
        image: protein3,
        type: "protein",
        quantity: 0,
    }
    let proteinProd4 = {
        id: 4,
        name: "Protein 4",
        price: 4000,
        image: protein4,
        type: "protein",
        quantity: 0,
    }
    let proteinProd5 = {
        id: 5,
        name: "Protein 5",
        price: 5000,
        image: protein5,
        type: "protein",
        quantity: 0,
    }



    // todo energy
    let energyProd1 = {
        id: 1,
        name: "Energy 1",
        price: 1000,
        image: energy1,
        type: "energy",
        quantity: 0,
    }
    let energyProd2 = {
        id: 2,
        name: "Energy 2",
        price: 2000,
        image: energy2,
        type: "energy",
        quantity: 0,
    }
    let energyProd3 = {
        id: 3,
        name: "Energy 3",
        price: 3000,
        image: energy3,
        type: "energy",
        quantity: 0,
    }
    let energyProd4 = {
        id: 4,
        name: "Energy 4",
        price: 4000,
        image: energy4,
        type: "energy",
        quantity: 0,
    }
    let energyProd5 = {
        id: 5,
        name: "Energy 5",
        price: 5000,
        image: energy5,
        type: "energy",
        quantity: 0,
    }



    // * health
    let healthProd1 = {
        id: 1,
        name: "Health 1",
        price: 1000,
        image: health1,
        type: "health",
        quantity: 0,
    }
    let healthProd2 = {
        id: 2,
        name: "Health 2",
        price: 2000,
        image: health2,
        type: "health",
        quantity: 0,
    }
    let healthProd3 = {
        id: 3,
        name: "Health 3",
        price: 3000,
        image: health3,
        type: "health",
        quantity: 0,
    }
    let healthProd4 = {
        id: 4,
        name: "Health 4",
        price: 4000,
        image: health4,
        type: "health",
        quantity: 0,
    }
    let healthProd5 = {
        id: 5,
        name: "Health 5",
        price: 5000,
        image: health5,
        type: "health",
        quantity: 0,
    }




    // ~~ snacks
    let snacksProd1 = {
        id: 1,
        name: "Snacks 1",
        price: 1000,
        image: snack1,
        type: "snacks",
        quantity: 0,
    }
    let snacksProd2 = {
        id: 2,
        name: "Snacks 2",
        price: 2000,
        image: snack2,
        type: "snacks",
        quantity: 0,
    }
    let snacksProd3 = {
        id: 3,
        name: "Snacks 3",
        price: 3000,
        image: snack3,
        type: "snacks",
        quantity: 0,
    }
    let snacksProd4 = {
        id: 4,
        name: "Snacks 4",
        price: 4000,
        image: snack4,
        type: "snacks",
        quantity: 0,
    }
    let snacksProd5 = {
        id: 5,
        name: "Snacks 5",
        price: 5000,
        image: snack5,
        type: "snacks",
        quantity: 0,
    }

    // ^^ gymWear
    let gymWearProd1 = {
        id: 1,
        name: "Gym Wear 1",
        price: 1000,
        image: gymwear1,
        type: "gymWear",
        quantity: 0,
    }
    let gymWearProd2 = {
        id: 2,
        name: "Gym Wear 2",
        price: 2000,
        image: gymwear2,
        type: "gymWear",
        quantity: 0,
    }
    let gymWearProd3 = {
        id: 3,
        name: "Gym Wear 3",
        price: 3000,
        image: gymwear3,
        type: "gymWear",
        quantity: 0,
    }
    let gymWearProd4 = {
        id: 4,
        name: "Gym Wear 4",
        price: 4000,
        image: gymwear4,
        type: "gymWear",
        quantity: 0,
    }
    let gymWearProd5 = {
        id: 5,
        name: "Gym Wear 5",
        price: 5000,
        image: gymwear5,
        type: "gymWear",
        quantity: 0,
    }

    //? workout GEAR
    let workoutGearProd1 = {
        id: 1,
        name: "Workout Gear 1",
        price: 1000,
        image: gear1,
        type: "workoutGear",
        quantity: 0,
    }
    let workoutGearProd2 = {
        id: 2,
        name: "Workout Gear 2",
        price: 2000,
        image: gear2,
        type: "workoutGear",
        quantity: 0,
    }
    let workoutGearProd3 = {
        id: 3,
        name: "Workout Gear 3",
        price: 3000,
        image: gear3,
        type: "workoutGear",
        quantity: 0,
    }
    let workoutGearProd4 = {
        id: 4,
        name: "Workout Gear 4",
        price: 4000,
        image: gear4,
        type: "workoutGear",
        quantity: 0,
    }
    let workoutGearProd5 = {
        id: 5,
        name: "Workout Gear 5",
        price: 5000,
        image: gear5,
        type: "workoutGear",
        quantity: 0,
    }




    // !!!!!
    const [allProducts, setAllProducts] = useState([
        proteinProd1,
        proteinProd2,
        proteinProd3,
        proteinProd4,
        proteinProd5,
        energyProd1,
        energyProd2,
        energyProd3,
        energyProd4,
        energyProd5,
        healthProd1,
        healthProd2,
        healthProd3,
        healthProd4,
        healthProd5,
        snacksProd1,
        snacksProd2,
        snacksProd3,
        snacksProd4,
        snacksProd5,
        gymWearProd1,
        gymWearProd2,
        gymWearProd3,
        gymWearProd4,
        gymWearProd5,
        workoutGearProd1,
        workoutGearProd2,
        workoutGearProd3,
        workoutGearProd4,
        workoutGearProd5,
    ])

    const [newProd, setNewProd] = useState([
        proteinProd2, healthProd3, energyProd4, snacksProd3
    ])
    const [onSales, setOnSales] = useState([
        proteinProd1, proteinProd3, energyProd5, workoutGearProd5
    ])
    const [bestSeller, setBestSeller] = useState([
        proteinProd5, healthProd1, energyProd5, snacksProd1
    ])




    const [cart, setCart] = useState([])




    return (
        <>
            <MyContext.Provider value={[allProducts, setAllProducts, newProd, setNewProd, onSales, setOnSales, bestSeller, setBestSeller, cart, setCart]}>
                {children}
            </MyContext.Provider>
        </>
    )
}

