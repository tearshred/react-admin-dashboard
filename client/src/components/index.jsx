export { default as Button } from './Button';
export { default as ThemeSettings } from './ThemeSettings';
export { default as Sidebar } from './Sidebar';
export { default as FinancialSummary } from './Financial/FinancialSummary';
export { default as RevenueOverview } from './Financial/RevenueOverview';
export { default as Navbar } from './Navbar';
export { default as Footer } from './Footer';
export { default as Cart } from './Cart';
export { default as Chat } from './Chat';
export { default as Notification } from './Notification';
export { default as UserProfile } from './UserProfile';
export { default as SparkLine } from './Charts/SparkLine';
export { default as LineChart } from './Charts/LineChart';
export { default as Stacked } from './Charts/Stacked';
export { default as Pie } from './Charts/Pie';
export { default as ChartsHeader } from './ChartsHeader';
export { default as Header } from './Header';

// Currency Conversion Function with proper formatting
export const currencyNumberFormat = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(value).replace(/^(\D+)/, '$1 ').replace(/\s+/, ' ');
  // '.replace' adds a space between the dollar sign and the amount

  export const percentageCalculator = (partialValue, totalValue) => {
    return (100 * partialValue) / totalValue;
  }