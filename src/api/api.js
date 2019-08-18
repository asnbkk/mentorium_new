import axios from 'axios'

import UniversitiesModel from '../pages/Universities/UniversitiesModel'
import UniversityModel from '../pages/University/UniversityModel'



const baseURL =  "http://localhost:3001/api";

function sendData(url, data) {
        return axios.post(`${baseURL}${url}`, {
            ...data
        })
    }

function getData(url, data) {
        return axios.get(`${baseURL}${url}`, {
            ...data
        })
    }
 

export function getUniversities() {
    getData('/univers/univers')
    .then(res => {

        if(res.data.length > 0) {
            let newList = [];
            newList = [...UniversitiesModel.listOfUniversities];

            for(let i = 0; i < res.data.length; i++) {
                let model = new UniversityModel();
                model.loadModel(res.data[i]);
                newList.push(model);
            }

            UniversitiesModel.set('downloadFinish', true);
            UniversitiesModel.set('listOfUniversities', newList);
        }

    })
    .catch(err => {
        console.log(err)
    })
}


