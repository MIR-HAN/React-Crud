const FormatDate = (date) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('nl-NL', {
        month: 'short',
        day: 'numeric',
    });
};

export default FormatDate;