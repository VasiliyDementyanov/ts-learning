function duplicate(text: string | null) {
  if (text === null || text === undefined) {
    text = '';
  }
  return text.concat(text);
}

// non null or undefined checking exclamation mark
function duplicate2(text: string | null) {
  return text!.concat(text!);
}
