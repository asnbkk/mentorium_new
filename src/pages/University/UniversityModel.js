import { observable, computed, configure, action, decorate } from 'mobx'

configure({ enforceActions: 'observed' })

export class UniversityModel {
    
    photo = null;
    name = null;
    city = null;
    country = null;
    requirements = null;
    history = null;
    statisctics = null;
    benefits = null;
    faculties = null;
    priceForLiving = null;
    priceForEducation = null;
    briefInfo = null;

    set(item, value) {
        this[item] = value;
    }

    loadModel(data) {
        Object.keys(data).forEach((item) => {
            this.set(item, data[item])
        })
    }

}

decorate(UniversityModel, {
    photo: observable,
    name : observable,
    city: observable,
    country: observable,
    requirements: observable,
    history: observable,
    statisctics: observable,
    benefits: observable,
    faculties: observable,
    priceForLiving: observable,
    priceForEducation: observable,
    briefInfo: observable,
    set: action
})

export default new UniversityModel()
