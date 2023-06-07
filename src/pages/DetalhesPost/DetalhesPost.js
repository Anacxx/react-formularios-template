import React from 'react'
import { useProtectPage } from '../../hooks/useProtectPage'

export default function DetalhesPost() {
  useProtectPage()
  return (
    <div>DetalhesPost</div>
  )
}
