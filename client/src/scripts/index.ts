export const formatDate = (date: string | number) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleString();
}
 