import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import App from './App'

describe('App', () => {
  it('renders the main community sections', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: /k9 community helps every dog feel at home/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /everything needed to support dogs and the people who love them/i,
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /show up for your dog, your shelter, and your neighbors/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /join the pack/i })).toHaveAttribute(
      'href',
      '#membership',
    )
  })
})
