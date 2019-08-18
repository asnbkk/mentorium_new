import React from 'react';
import PropTypes from 'prop-types';

import UniversityCardStyle from './UniversityCardStyle.js'
import Container from '../Container/Container.js';
import Card from '../Card/Card.js';
import Button from '../Button/Button.js';

import Text from '../../components/Text/Text';
import Image from '../../components/Image/Image';
import Link from '../../components/Link/Link';
import Divider from '../../components/Divider/Divider';


import UniversityImage from '../../assets/zdanie.png'

UniversityCard.propTypes = {
  children: PropTypes.node,

}

UniversityCard.defaultProps = {
    children: null
}

function UniversityCard({
    children, imageSource, title, city, country, requirements, briefInfo
}) {

  return (
    <UniversityCardStyle>
        <Card>
            <Container direction='column 'width='100%' height='300px'>
                <Container width='100%'  direction='row' height='100%'>
                  <Container  width='27%'>
                    <Image borderRadius='30px' src={UniversityImage} width='97%' />
                  </Container>
                  <Container margin={['10px', 0, 0, 0]} direction='column' width='100%'>
                    <Container align='center'>
                        <Text big bold>Казахстанско-Британский технический университет</Text>
                    </Container>
                    <Container align='left' margin={[0, 0, '5px', 0]}>
                      <Text secondary>Алматы, Казахстан</Text>
                    </Container>
                      
                      <Container direction='row'>
                          <Container width='50%' margin={[0, '0px', 0, 0]}>
                            <Text big>
                              Казахстанско-Британский технический универ - один из лучших технических вузов Республики на протяжении последних лет.
                            </Text>
                            <Divider vertical/>
                          </Container>
                          <Container align='center' direction='column' width='49%'>
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
                            <Container margin={['20px', 0, 0, '70%']}>
                            <Link inverted to='/university'>
                              <Button primary>Подробнее</Button>
                            </Link>
                            </Container>
                          </Container>
                      </Container>
                  </Container>
                </Container>
            </Container>
        </Card>
    </UniversityCardStyle>
  );
}

export default UniversityCard;
