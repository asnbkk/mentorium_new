import React, { Component } from 'react';

import { getData } from '../../api/api.js';

import BackgroundBlock from '../../components/BackgroundBlock/BackgroundBlock'
import Text from '../../components/Text/Text';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Image from '../../components/Image/Image';
import Link from '../../components/Link/Link';
import Input from '../../components/Input/Input';
// import Footer from '../../components/Footer/Footer';
import UniversityCard from '../../components/UniversityCard/UniversityCard';
import Divider from '../../components/Divider/Divider';



import { getUniversities } from "../../api/api.js";


import BuildingImg from '../../assets/building.png';
import ClockImg from '../../assets/clock.png'
import GoalImg from '../../assets/goal.png'
import SignUpImg from '../../assets/sign-up.png'
import { UniversitiesModel } from './UniversitiesModel.js';
import UniversityCardStyle from '../../components/UniversityCard/UniversityCardStyle.js';






export default class Universities extends Component {

    componentDidMount() {
        getUniversities();
    }

    render () {

        const universities = [];

        if (UniversitiesModel.downloadFinish) {

            universities = UniversitiesModel.listOfUniversities.map(item => {
                return (
                    <UniversityCard 
                        imageSource={item.image}
                        title={item.name}
                        city={item.city}
                        country={item.country}
                        requirements={item.requirements}
                        briefInfo={item.briefInfo}/>
                )
            })
        }

        return (
            <>

                <BackgroundBlock top={-1900} left={1200}/>
                <BackgroundBlock top={0} left={-200} lightBlue/>
                
                <Container direction='column' margin={['100px','10%', '800px', '10%']}>
                    <Container margin={[0, 0, 0, '20px']}>
                        <Text  bold large>
                            Вузы
                        </Text>
                    </Container>
                    <Container margin={['20px', 0, 0, 0]} align='center' width='80%'>
                        <Container width='60%'>
                            <Input
                                blue
                                small
                                placeholder='Поиск по вузам...'/>
                        </Container>
                        <Container width='40%'>
                            <Button primary>Найти</Button>
                        </Container>
                    </Container>
                    <Container direction='row'>
                        <Container direction='column' width='100%' margin={['100px', '1%', 0, '1%']}>
                            <UniversityCard />
                            <UniversityCard />
                            <UniversityCard />
                        </Container>
                    </Container>
                </Container>
                {/* <Footer /> */}

            </>
          );
    }
}