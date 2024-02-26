import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  public static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log('Uncaught error:', error, errorInfo)
  }

  public render() {
    const { hasError } = this.state
    const { children } = this.props
    if (hasError) {
      return <h1>에러가 발생했어요</h1>
    }

    return children
  }
}

export default ErrorBoundary
