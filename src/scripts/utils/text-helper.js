const TextHelper = {

  truncate(text, num) {
    if (num > text.length) {
      return text;
    }
    const textCropped = text.substring(0, num);
    return `${textCropped}...`;
  },
};

export default TextHelper;
