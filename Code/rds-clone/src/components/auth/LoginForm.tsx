// rds-clone/src/components/auth/LoginForm.tsx
import React, { useState } from 'react';
import { UserIcon, LockClosedIcon, EyeIcon, EyeSlashIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import lockIconSvg from '../../assets/images/lock-icon.svg'; // Path to your local SVG

interface LoginFormProps {
  onLoginSuccess: () => void; // Callback for successful login
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [step, setStep] = useState(1); // 1 for username, 2 for password/captcha
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  // Placeholder for actual captcha image/generation
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
    // Simulate login
    console.log('Logging in with:', username, password);
    onLoginSuccess(); // Call the success callback
  };

  return (
    <div className="w-full max-w-md bg-gradient-to-br from-nsu-primary to-nsu-secondary rounded-xl shadow-2xl p-8 md:p-10 text-nsu-light-text">
      <div className="flex flex-col items-center mb-6">
        <div className="bg-white/20 p-4 rounded-full mb-4">
          <img src={lockIconSvg} alt="Lock Icon" className="w-12 h-12" />
        </div>
        <h2 className="text-3xl font-bold text-center">RDS</h2>
        <p className="mt-1 text-center text-lg">NSU Portal : Login</p>
      </div>

      {error && <p className="mb-4 text-center text-red-300 bg-red-700/50 p-2 rounded">{error}</p>}

      {step === 1 && (
        <form onSubmit={handleNext} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium">
              Username
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                name="username"
                id="username"
                className="focus:ring-nsu-accent focus:border-nsu-accent block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 text-nsu-dark-text"
                placeholder="Please enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-nsu-primary bg-nsu-light-text hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-nsu-primary focus:ring-nsu-accent transition duration-150"
            >
              Next
            </button>
          </div>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="text-center mb-4">
            <p className="text-sm">Welcome</p>
            <p className="font-semibold text-xl">{username}</p>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockClosedIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                className="focus:ring-nsu-accent focus:border-nsu-accent block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 text-nsu-dark-text"
                placeholder="Please enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-400 hover:text-gray-500">
                  {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="captcha" className="block text-sm font-medium">
              Captcha
            </label>
            <div className="mt-1 bg-nsu-primary/70 text-white p-3 rounded-md text-center text-2xl font-bold tracking-[0.5em] select-none line-through mb-2">
              {captchaValue}
            </div>
            <div className="relative rounded-md shadow-sm">
               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <ShieldCheckIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                name="captcha"
                id="captcha"
                className="focus:ring-nsu-accent focus:border-nsu-accent block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 text-nsu-dark-text"
                placeholder="Please enter the numbers shown"
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-nsu-primary bg-nsu-light-text hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-nsu-primary focus:ring-nsu-accent transition duration-150"
            >
              Login
            </button>
          </div>
        </form>
      )}

      <div className="mt-8 text-center">
        <a href="#" className="text-sm font-medium text-nsu-accent hover:text-nsu-accent/80">
          Forgot your password?
        </a>
      </div>
    </div>
  );
};

export default LoginForm;