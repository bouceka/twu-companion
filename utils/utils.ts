export const getUSDate = (date: Date) =>
  new Date(date).toLocaleDateString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
