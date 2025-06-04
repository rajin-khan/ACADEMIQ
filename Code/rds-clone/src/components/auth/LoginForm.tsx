// rds-clone/src/components/auth/LoginForm.tsx
import React, { useState } from 'react';
import { UserIcon, LockClosedIcon, EyeIcon, EyeSlashIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import lockIconSvg from '../../assets/images/lock-icon-dark.svg';

interface LoginFormProps {
  onLoginSuccess: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const captchaValue = "3 4 4 6";

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) {
      setError('Username is required.');
      return;
    }
    setError('');
    setStep(2);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setError('Password is required.');
      return;
    }
    if (!captcha) {
      setError('Captcha is required.');
      return;
    }
    if (captcha !== captchaValue.replace(/\s/g, '')) {
      setError('Captcha does not match.');
      return;
    }
    setError('');
    console.log('Logging in with:', username, password);
    onLoginSuccess();
  };

  const inputBaseClasses = "block w-full pl-10 pr-3 py-3 bg-dark-secondary border border-dark-tertiary rounded-md text-light-primary placeholder-light-tertiary focus:outline-none sm:text-sm";
  const inputFocusClasses = "focus:ring-1 focus:ring-brand-cyan focus:border-brand-cyan";

  return (
    <div className="w-full max-w-md bg-gradient-to-br from-brand-purple via-brand-pink to-brand-orange rounded-xl shadow-2xl p-1">
      <div className="bg-dark-secondary rounded-lg p-8 md:p-10 text-light-primary">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-dark-primary/50 p-4 rounded-full mb-4 shadow-md">
            <img src={lockIconSvg} alt="Lock Icon" className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-center text-gradient-pink-orange">RDS Portal</h2>
          <p className="mt-1 text-center text-lg text-light-tertiary">Secure Login</p>
        </div>

        {error && <p className="mb-4 text-center text-red-300 bg-red-900/50 p-3 rounded-md text-sm">{error}</p>}

        {step === 1 && (
          <form onSubmit={handleNext} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-light-secondary mb-1">
                Username
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-light-tertiary" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className={`${inputBaseClasses} ${inputFocusClasses}`}
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoFocus
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-dark-primary bg-gradient-to-r from-brand-lime to-brand-cyan hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-secondary focus:ring-brand-cyan transition duration-150"
              >
                Next
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="text-center mb-4">
              <p className="text-sm text-light-tertiary">Welcome back,</p>
              <p className="font-semibold text-xl text-gradient-blue-cyan">{username}</p>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-light-secondary mb-1">
                Password
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockClosedIcon className="h-5 w-5 text-light-tertiary" aria-hidden="true" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  className={`${inputBaseClasses} ${inputFocusClasses}`}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoFocus
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-light-tertiary hover:text-light-primary">
                    {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="captcha" className="block text-sm font-medium text-light-secondary mb-1">
                Captcha
              </label>
              <div className="bg-dark-primary/70 text-white p-3 rounded-md text-center text-2xl font-bold tracking-[0.3em] select-none line-through mb-2 shadow-sm">
                {captchaValue}
              </div>
              <div className="relative rounded-md shadow-sm">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <ShieldCheckIcon className="h-5 w-5 text-light-tertiary" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="captcha"
                  id="captcha"
                  className={`${inputBaseClasses} ${inputFocusClasses}`}
                  placeholder="Enter the numbers shown"
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-dark-primary bg-gradient-to-r from-brand-lime to-brand-cyan hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-secondary focus:ring-brand-cyan transition duration-150"
              >
                Login
              </button>
            </div>
          </form>
        )}

        <div className="mt-8 text-center">
          <a href="#" className="text-sm font-medium text-brand-cyan hover:text-brand-blue">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;