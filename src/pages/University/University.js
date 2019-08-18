import React, { Component } from 'react';

import { getData } from '../../api/api.js'

import BackgroundBlock from '../../components/BackgroundBlock/BackgroundBlock';
import Text from '../../components/Text/Text';
import Container from '../../components/Container/Container';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Image from '../../components/Image/Image';
import Link from '../../components/Link/Link';
import Input from '../../components/Input/Input';
import Footer from '../../components/Footer/Footer';
import UniversityCard from '../../components/UniversityCard/UniversityCard';
import Divider from '../../components/Divider/Divider';




import { getUniversities } from "../../api/api.js";

import Logo from '../../assets/mentorium-logo.png'
import UniversityImg from '../../assets/university.jpg'
import CheckImg from '../../assets/check.png'
import HistoryImg from '../../assets/history.png'
import PartyImg from '../../assets/party.png'
import ContainerStyle from '../../components/Container/ContainerStyle.js';




export default class University extends Component {
    render () {
        return (
            <>
            <Container zIndex='50' direction='row' position='absolute' left='43%' align='center'>
                
                <Text inverted>mentorium</Text>
            </Container>
                <Image width='100%' withFilter height='90vh' src={UniversityImg}/>  
                <Container width='40%' direction='column' position='absolute' zIndex='50' top='55%' left='5%'>
                    <Text large bold inverted>
                        Казахстанко-Британский технический университет
                    </Text>
                    <Text big bold inverted>
                        Алматы, Казахстан
                    </Text>
                </Container>
                <Container direction='column' width='30%'  position='absolute' zIndex='50' top='60%' left='65%'>
                    <Card>
                        <Container align='center' justifyContent='space-around' padding={['10px', '10px', '10px', '10px']}  height='600px' direction='column' width='100%'>
                                <Container direction='row'>
                                    <Text large>
                                    ЕНТ:
                                    </Text>
                                    <Text large bold>&nbsp;85</Text>
                                </Container>
                                <Container direction='row'>
                                <Text large>
                                    IELTS: 
                                </Text>
                                <Text large bold>&nbsp;5.5</Text>
                                </Container><Container direction='row'>
                                <Text large>
                                    SAT: 
                                </Text>
                                <Text large bold>&nbsp;-</Text>
                                </Container> 
                                <Container align='center'>
                                    <Link withoutLine to='/university'>
                                        <Button primary>Помощь в поступлением</Button>
                                    </Link>
                                </Container>
                          </Container>
                    </Card>
                </Container>
                <Container direction='row' width='60%' margin={['50px', 0, 0, '50px']} justifyContent='space-around'> 
                    <Link primary>
                        Статистика
                    </Link>
                    <Link>
                        Требования
                    </Link>
                    <Link>
                        Статистика
                    </Link>
                    <Link>
                        Требования
                    </Link>
                </Container>     
                <Container direction='row' width='100%'>
                    <Container margin={['50px', 0, 0, '100px']} height='900px' width='50%' direction='column' align='center' justifyContent='space-around'>
                        <Text  bold big>Статистика для поступающих</Text>
                        <Container width='100%'>
                            <Card>
                                <Container width='50%' height='800px'>
                                    
                                </Container>
                            </Card>
                        </Container>
                    </Container>
                    <Container margin={['250px', 0, 0, '100px']} height='900px' width='50%' direction='column' align='center' justifyContent='end'>
                        <Image height='80%' src={CheckImg}/>
                    </Container>
                </Container>
                <Container align='start' justifyContent='space-around' direction='column' height='700px' width='70%' margin={[0, 0, 0, '100px']}>
                    <Text big bold>Почему стоит поступать в этот вуз?</Text>
                    <Card>
                        <Container height='600px' width='100%'>

                        </Container>
                    </Card>
                </Container>
                <Container align='center' direction='row' justifyContent='space-around' margin={['250px', 0, 0, '100px']} width='100%'> 
                    <Container height='300px' width='48%' align='start' justifyContent='space-around' direction='column'>
                        <Text big bold>Факультеты</Text>
                        <Text>- Факультет Геологии и нефтегазовой индустрии;</Text>
                        <Text>- Факультет Информационных технологий;</Text>
                        <Text>- Факультет математики и кибернетики;</Text>
                        <Text>- Казахстанская морская академия;</Text>
                        <Text>- Бизнес школа;</Text>
                        <Text>- Международная школа экономики;</Text>
                    </Container>
                    <Container width='48%'>
                        <Image width='90%' src={PartyImg} />
                    </Container>
                </Container>
                <Container justifyContent='space-around' direction='column' height='400px' width='90%' margin={['250px', 'auto', 0, 'auto']}>
                    <Text big bold>Лица университета</Text>
                    <Card>
                        <Container height='300px' width='100%'>

                        </Container>
                    </Card>
                </Container>
                <Container align='center' direction='column' justifyContent='space-around' height='600px' margin={['250px', 'auto', 0, 'auto']} width='80%'> 
                    <Text big bold>Стоимость обучения и проживания</Text>
                    <Container width='100%' justifyContent='space-around' height='500px'>
                        <Container width='45%'>
                            <Card>
                                <Container width='100%'>
                                    
                                </Container>
                            </Card>
                        </Container>
                        <Container width='45%'>
                            <Card>
                                <Container width='100%'>

                                </Container>
                            </Card>
                        </Container>
                    </Container>
                </Container>
                <Container direction='row' justifyContent='space-around'>
                    <Container direction='column' margin={['250px', 0, 0, '100px']} justifyContent='space-around' height='650px' width='40%'>
                            <Text bold>
                                Казахстанско-Британский технический универ - один из лучших технических вузов Республики на протяжении последних лет.
                            </Text>
                            <Container margin={[0, 0, 0, '100px']}>
                                <Text secondary>
                                По инициативе ПП, в ноябре 2000 года было создано АО «Казахстанско-Британский технический университет». В ходе официального визита Президента Республики Казахстан Н.А.Назарбаева в Соединенное Королевство Великобритании и Северной Ирландии. Сам универ был основан 3 августа 2001 года.
                                </Text>
                            </Container>
                            <Text>
                            Главной целью КБТУ является - поддерживать научное, промышленное и экономическое развитие Казахстана, выпуская высококвалифицированных специалистов. 98% процентов студентов КБТУ находят работу вскоре после окончания университета или продолжают обучение. Некоторые из них приглашаются компаниями еще во время учебы. Немало выпускников которые работают в ведущих международных компаниях IT и нефтегазовой отраслей, в том числе, в Силиконовой долине.
                            </Text>
                            <Container margin={[0, 0, 0, '100px']}>
                                <Text secondary>
                                    КБТУ гордится высококвалифицированными преподавателями, в числе которых есть известные ученые. КБТУ располагает современными научными лабораториями, где исследователи и студенты работают над инновационными проектами.
                                </Text>
                            </Container>
                    </Container>
                    <Container width='50%' margin={['250px', 0, 0, '100px']}>
                        <Image src={HistoryImg} width='90%'/>
                    </Container>
                </Container>
                <Container margin={['250px', 'auto', 0, 'auto']} justifyContent='center' width='60%'>
                    <Card>
                        <Container  align='center'  padding={[0, '40px', 0, '40px']} height='90px' width='100%' >
                            <Container width='80%'>
                                    <Text bold>Мы можем помочь тебе с поступлением в Казахстанско-Британский технический университет</Text>
                            </Container>
                            <Container padding={[0, 0, 0, '30px']} width='20%'>
                                        <Button primary>Подробнее</Button>
                            </Container>
                        </Container>
                    </Card>
                </Container>
                <Container margin={['250px', 'auto', 0, 'auto']} height='400px' align='center' justifyContent='space-around' direction='column' width='80%'>
                    <Text big bold>Может заинтересовать</Text>
                    <Container justifyContent='space-around' width='100%' direction='row'>
                            <Container width='27%'  height='300px'>
                                <Card>
                                    <Container>
                                    </Container>
                                </Card>
                            </Container>
                            <Container width='27%'  height='300px'>
                                <Card>
                                    <Container>
                                    </Container>
                                </Card>
                            </Container>
                            <Container width='27%'  height='300px'>
                                <Card>
                                    <Container >
                                    </Container>
                                </Card>
                            </Container>
                    </Container>
                 </Container>
                </>
          );
    }
}