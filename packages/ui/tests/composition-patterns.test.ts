import * as React from 'react'
import { expect, test } from 'vite-plus/test'

import * as ui from '../src/index.js'

type ElementFactory = (props: Record<string, never>) => React.ReactElement<Record<string, any>>

test('exports explicit composition helpers for close and combobox actions', () => {
  expect(ui).toHaveProperty('DialogContentClose')
  expect(ui).toHaveProperty('DialogFooterClose')
  expect(ui).toHaveProperty('SheetContentClose')
  expect(ui).toHaveProperty('ComboboxInputAddon')
  expect(ui).toHaveProperty('ComboboxInputTrigger')
  expect(ui).toHaveProperty('ComboboxInputClear')
  expect(ui).toHaveProperty('ComboboxChipRemove')
})

test('close helpers expose explicit default structure', () => {
  const DialogContentClose = (ui as Record<string, unknown>).DialogContentClose as
    | ElementFactory
    | undefined
  const DialogFooterClose = (ui as Record<string, unknown>).DialogFooterClose as
    | ElementFactory
    | undefined
  const SheetContentClose = (ui as Record<string, unknown>).SheetContentClose as
    | ElementFactory
    | undefined

  expect(DialogContentClose).toBeTypeOf('function')
  expect(DialogFooterClose).toBeTypeOf('function')
  expect(SheetContentClose).toBeTypeOf('function')

  if (!DialogContentClose || !DialogFooterClose || !SheetContentClose) {
    return
  }

  const dialogContentClose = DialogContentClose({})
  expect(dialogContentClose.props['data-slot']).toBe('dialog-content-close')
  expect(dialogContentClose.props.children.props.className).toContain('absolute top-2 right-2')

  const dialogFooterClose = DialogFooterClose({})
  expect(dialogFooterClose.props['data-slot']).toBe('dialog-footer-close')
  expect(dialogFooterClose.props.children.props.children).toBe('Close')

  const sheetContentClose = SheetContentClose({})
  expect(sheetContentClose.props['data-slot']).toBe('sheet-content-close')
  expect(sheetContentClose.props.children.props.className).toContain('absolute top-3 right-3')
})

test('combobox helpers expose explicit addon and remove structure', () => {
  const ComboboxInputAddon = (ui as Record<string, unknown>).ComboboxInputAddon as
    | ElementFactory
    | undefined
  const ComboboxInputTrigger = (ui as Record<string, unknown>).ComboboxInputTrigger as
    | ElementFactory
    | undefined
  const ComboboxInputClear = (ui as Record<string, unknown>).ComboboxInputClear as
    | ElementFactory
    | undefined
  const ComboboxChipRemove = (ui as Record<string, unknown>).ComboboxChipRemove as
    | ElementFactory
    | undefined

  expect(ComboboxInputAddon).toBeTypeOf('function')
  expect(ComboboxInputTrigger).toBeTypeOf('function')
  expect(ComboboxInputClear).toBeTypeOf('function')
  expect(ComboboxChipRemove).toBeTypeOf('function')

  if (!ComboboxInputAddon || !ComboboxInputTrigger || !ComboboxInputClear || !ComboboxChipRemove) {
    return
  }

  const comboboxInputAddon = ComboboxInputAddon({})
  expect(comboboxInputAddon.props['data-slot']).toBe('combobox-input-addon')
  expect(comboboxInputAddon.props.align).toBe('inline-end')

  const comboboxInputTrigger = ComboboxInputTrigger({})
  expect(comboboxInputTrigger.props['data-slot']).toBe('combobox-input-trigger')
  expect(comboboxInputTrigger.props.children.props['data-slot']).toBe('combobox-trigger')

  const comboboxInputClear = ComboboxInputClear({})
  expect(comboboxInputClear.props['data-slot']).toBe('combobox-input-clear')

  const comboboxChipRemove = ComboboxChipRemove({})
  expect(comboboxChipRemove.props['data-slot']).toBe('combobox-chip-remove')
  expect(comboboxChipRemove.props.className).toContain('opacity-50')
})
