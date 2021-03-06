import { FC } from 'react';
import './style.scss';

interface TypeBtn{
  onSubmit:()=>void
}

export const BtnGoogle: FC<TypeBtn> = ({ onSubmit }) => (
  <div
    style={{ cursor: 'pointer' }}
    className="google-btn"
    role="button"
    tabIndex={0}
    onKeyDown={onSubmit}
    onClick={onSubmit}
  >
    <div className="google-icon-wrapper">
      <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="btn" />
    </div>
    <p className="btn-text"><b>Continue with google</b></p>
  </div>
);
