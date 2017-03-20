import React, { PropTypes } from 'react';

const style = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    backgroundColor: '#A91700',
    width: '32em',
    height: '24em'
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '.5em',
    paddingLeft: '2em',
    paddingRight: '1em'
  },
  epigrafe: {
    fontFamily: 'sans-serif',
    color: '#EAEAEA',
    fontStyle: 'italic',
    textTransform: 'uppercase',
    textShadow: 'black 4px 4px 0'
  },
  rightContainer: {
    lineHeight: '1em'
  },
  logo: {
    backgroundColor: '#FFFFFF',
    padding: '0 .4em',
    color: '#B32C32',
    border: '1px solid black',
    borderRadius: '2px',
    fontFamily: 'cursive',
    fontWeight: 'bold'
  },
  timeAndTemperatureContainer: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-end',
    paddingRight: '.5em'
  },
  timeAndTemperature: {
    backgroundColor: 'black',
    color: '#EBF8BD'
  },
  content: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    marginTop: '-.5em',
    fontFamily: 'Impact',
    color: '#EAEAEA',
    textAlign: 'center',
    fontSize: '4em',
    textTransform: 'uppercase',
    textShadow: 'black 4px 4px 0'
  }
};

function PlacaRoja({
  epigrafe = 'Reiteramos',
  hora = '16:21',
  temperatura = '26º5',
  logo = 'crónica',
  children
}) {
  return (
    <div style={style.container}>
      <div style={style.titleContainer}>
        <span style={style.epigrafe}>
          {epigrafe}
        </span>
        <div style={style.rightContainer}>
          <div style={style.logo}>{logo}</div>
          <div style={style.timeAndTemperatureContainer}>
            <span style={style.timeAndTemperature}>{hora}</span>
            <span style={style.timeAndTemperature}>{temperatura}</span>
          </div>
        </div>
      </div>
      <div style={style.content}>
        {children}
      </div>
    </div>
  );
}

PlacaRoja.propTypes = {
  epigrafe: PropTypes.string,
  logo: PropTypes.string,
  hora: PropTypes.string,
  temperatura: PropTypes.string,
  children: PropTypes.string.isRequired
};

export default PlacaRoja;
