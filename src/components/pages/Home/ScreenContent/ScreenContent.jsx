import React from 'react';
import { connect } from 'react-redux';

const ScreenContent = props => {
  const { titleBlock, isReverse } = props;
  return (
    <div className={`${isReverse ? 'flex-row-reverse ' : ''}row`}>
      {titleBlock !== undefined &&
        <div className={`${titleBlock.className} screen-title`}>
          <h2>{titleBlock.h2}</h2>
          {titleBlock.desc !== undefined && <div className={`${titleBlock.desc.length > 75 ? 'font-small' : 'font-normal'} desc`}>{titleBlock.desc}</div>}
          {titleBlock.btn !== undefined && <a className="btn__red" href="/">{titleBlock.btn}</a>}
        </div>
      }
      {props.children}
    </div>
  );
}

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScreenContent);
