'use client';

import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="main-screen bg-red-500 flex items-center justify-center">
          <div className="text-white text-center p-8">
            <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
            <p className="mb-4">The character showcase encountered an error.</p>
            <button 
              onClick={() => this.setState({ hasError: false })}
              className="bg-white text-red-500 px-4 py-2 rounded hover:bg-gray-100 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
