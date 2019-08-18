import { observable, computed, configure, action, decorate } from 'mobx'

import UniversityModel from '../University/UniversityModel'

configure({ enforceActions: 'observed' })

export class UniversitiesModel {
    
    listOfUniversities = [];
    downloadFinish = false;

    set(item, value) {
        this[item] = value;
    }

}

decorate(UniversitiesModel, {
    listOfUniversities: observable,
    downloadFinish: observable,

    set: action
})

export default new UniversitiesModel()
