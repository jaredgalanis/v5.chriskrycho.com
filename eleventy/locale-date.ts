import { DateTime } from 'luxon'

const OPTIONS = { zone: 'utc' }

function localeDate(date: Date | string, format = DateTime.DATE_FULL): string {
   const dateTime =
      typeof date === 'string'
         ? DateTime.fromSQL(date, OPTIONS)
         : DateTime.fromJSDate(date, OPTIONS)

   return dateTime.toLocaleString(format)
}

module.exports = localeDate