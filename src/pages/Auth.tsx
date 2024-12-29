import React from 'react';
import { useLocation, Navigate, Link } from 'react-router-dom';
import { AuthForm } from '../components/auth/AuthForm';
import { useAuth } from '../hooks/useAuth';
import { Sparkles } from 'lucide-react';

export function Auth() {
  const location = useLocation();
  const isLogin = location.pathname === '/login';
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">ContentForge AI</span>
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          {isLogin ? 'Welcome back!' : 'Create your account'}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl rounded-xl sm:px-10">
          <AuthForm type={isLogin ? 'login' : 'signup'} />
          
          <div className="mt-6 flex items-center justify-between">
            {isLogin ? (
              <Link to="/signup" className="text-sm text-blue-600 hover:text-blue-500">
                Don't have an account?
              </Link>
            ) : (
              <Link to="/login" className="text-sm text-blue-600 hover:text-blue-500">
                Already have an account?
              </Link>
            )}
            {isLogin && (
              <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
                Forgot password?
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}