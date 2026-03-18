'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon } from 'lucide-react'
import * as React from 'react'
import { DayPicker, getDefaultClassNames, type DayButton, type Locale } from 'react-day-picker'

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  buttonVariant = 'ghost',
  locale,
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>['variant']
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        'wuhanui:group/calendar wuhanui:bg-background wuhanui:p-3 wuhanui:[--cell-radius:var(--radius-md)] wuhanui:[--cell-size:--spacing(8)] wuhanui:in-data-[slot=card-content]:bg-transparent wuhanui:in-data-[slot=popover-content]:bg-transparent',
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={captionLayout}
      locale={locale}
      formatters={{
        formatMonthDropdown: (date) => date.toLocaleString(locale?.code, { month: 'short' }),
        ...formatters,
      }}
      classNames={{
        root: cn('wuhanui:w-fit', defaultClassNames.root),
        months: cn(
          'wuhanui:relative wuhanui:flex wuhanui:flex-col wuhanui:gap-4 wuhanui:md:flex-row',
          defaultClassNames.months,
        ),
        month: cn(
          'wuhanui:flex wuhanui:w-full wuhanui:flex-col wuhanui:gap-4',
          defaultClassNames.month,
        ),
        nav: cn(
          'wuhanui:absolute wuhanui:inset-x-0 wuhanui:top-0 wuhanui:flex wuhanui:w-full wuhanui:items-center wuhanui:justify-between wuhanui:gap-1',
          defaultClassNames.nav,
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          'wuhanui:size-(--cell-size) wuhanui:p-0 wuhanui:select-none wuhanui:aria-disabled:opacity-50',
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          'wuhanui:size-(--cell-size) wuhanui:p-0 wuhanui:select-none wuhanui:aria-disabled:opacity-50',
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          'wuhanui:flex wuhanui:h-(--cell-size) wuhanui:w-full wuhanui:items-center wuhanui:justify-center wuhanui:px-(--cell-size)',
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          'wuhanui:flex wuhanui:h-(--cell-size) wuhanui:w-full wuhanui:items-center wuhanui:justify-center wuhanui:gap-1.5 wuhanui:text-sm wuhanui:font-medium',
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          'wuhanui: wuhanui:relative wuhanui:rounded-(--cell-radius)',
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn(
          'wuhanui:absolute wuhanui:inset-0 wuhanui:bg-popover wuhanui:opacity-0',
          defaultClassNames.dropdown,
        ),
        caption_label: cn(
          'wuhanui:font-medium wuhanui:select-none',
          captionLayout === 'label'
            ? 'wuhanui:text-sm'
            : 'wuhanui: wuhanui:flex wuhanui:items-center wuhanui:gap-1 wuhanui:rounded-(--cell-radius) wuhanui:text-sm wuhanui:[&>svg]:size-3.5 wuhanui:[&>svg]:text-muted-foreground',
          defaultClassNames.caption_label,
        ),
        table: 'wuhanui:w-full wuhanui:border-collapse',
        weekdays: cn('wuhanui:flex', defaultClassNames.weekdays),
        weekday: cn(
          'wuhanui:flex-1 wuhanui:rounded-(--cell-radius) wuhanui:text-[0.8rem] wuhanui:font-normal wuhanui:text-muted-foreground wuhanui:select-none',
          defaultClassNames.weekday,
        ),
        week: cn('wuhanui:mt-2 wuhanui:flex wuhanui:w-full', defaultClassNames.week),
        week_number_header: cn(
          'wuhanui:w-(--cell-size) wuhanui:select-none',
          defaultClassNames.week_number_header,
        ),
        week_number: cn(
          'wuhanui:text-[0.8rem] wuhanui:text-muted-foreground wuhanui:select-none',
          defaultClassNames.week_number,
        ),
        day: cn(
          'wuhanui:group/day wuhanui:relative wuhanui:aspect-square wuhanui:h-full wuhanui:w-full wuhanui:rounded-(--cell-radius) wuhanui:p-0 wuhanui:text-center wuhanui:select-none wuhanui:[&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius)',
          props.showWeekNumber
            ? 'wuhanui:[&:nth-child(2)[data-selected=true]_button]:rounded-l-(--cell-radius)'
            : 'wuhanui:[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius)',
          defaultClassNames.day,
        ),
        range_start: cn(
          'wuhanui:relative wuhanui:isolate wuhanui:z-0 wuhanui:rounded-l-(--cell-radius) wuhanui:bg-muted wuhanui:after:absolute wuhanui:after:inset-y-0 wuhanui:after:right-0 wuhanui:after:w-4 wuhanui:after:bg-muted',
          defaultClassNames.range_start,
        ),
        range_middle: cn('wuhanui:rounded-none', defaultClassNames.range_middle),
        range_end: cn(
          'wuhanui:relative wuhanui:isolate wuhanui:z-0 wuhanui:rounded-r-(--cell-radius) wuhanui:bg-muted wuhanui:after:absolute wuhanui:after:inset-y-0 wuhanui:after:left-0 wuhanui:after:w-4 wuhanui:after:bg-muted',
          defaultClassNames.range_end,
        ),
        today: cn(
          'wuhanui:rounded-(--cell-radius) wuhanui:bg-muted wuhanui:text-foreground wuhanui:data-[selected=true]:rounded-none',
          defaultClassNames.today,
        ),
        outside: cn(
          'wuhanui:text-muted-foreground wuhanui:aria-selected:text-muted-foreground',
          defaultClassNames.outside,
        ),
        disabled: cn(
          'wuhanui:text-muted-foreground wuhanui:opacity-50',
          defaultClassNames.disabled,
        ),
        hidden: cn('wuhanui:invisible', defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return <div data-slot="calendar" ref={rootRef} className={cn(className)} {...props} />
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === 'left') {
            return (
              <ChevronLeftIcon className={cn('wuhanui: wuhanui:size-4', className)} {...props} />
            )
          }

          if (orientation === 'right') {
            return (
              <ChevronRightIcon className={cn('wuhanui: wuhanui:size-4', className)} {...props} />
            )
          }

          return <ChevronDownIcon className={cn('wuhanui:size-4', className)} {...props} />
        },
        DayButton: ({ ...props }) => <CalendarDayButton locale={locale} {...props} />,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="wuhanui:flex wuhanui:size-(--cell-size) wuhanui:items-center wuhanui:justify-center wuhanui:text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  locale,
  ...props
}: React.ComponentProps<typeof DayButton> & { locale?: Partial<Locale> }) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString(locale?.code)}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        'wuhanui:relative wuhanui:isolate wuhanui:z-10 wuhanui:flex wuhanui:aspect-square wuhanui:size-auto wuhanui:w-full wuhanui:min-w-(--cell-size) wuhanui:flex-col wuhanui:gap-1 wuhanui:border-0 wuhanui:leading-none wuhanui:font-normal wuhanui:group-data-[focused=true]/day:relative wuhanui:group-data-[focused=true]/day:z-10 wuhanui:group-data-[focused=true]/day:border-ring wuhanui:group-data-[focused=true]/day:ring-[3px] wuhanui:group-data-[focused=true]/day:ring-ring/50 wuhanui:data-[range-end=true]:rounded-(--cell-radius) wuhanui:data-[range-end=true]:rounded-r-(--cell-radius) wuhanui:data-[range-end=true]:bg-primary wuhanui:data-[range-end=true]:text-primary-foreground wuhanui:data-[range-middle=true]:rounded-none wuhanui:data-[range-middle=true]:bg-muted wuhanui:data-[range-middle=true]:text-foreground wuhanui:data-[range-start=true]:rounded-(--cell-radius) wuhanui:data-[range-start=true]:rounded-l-(--cell-radius) wuhanui:data-[range-start=true]:bg-primary wuhanui:data-[range-start=true]:text-primary-foreground wuhanui:data-[selected-single=true]:bg-primary wuhanui:data-[selected-single=true]:text-primary-foreground wuhanui:dark:hover:text-foreground wuhanui:[&>span]:text-xs wuhanui:[&>span]:opacity-70',
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
