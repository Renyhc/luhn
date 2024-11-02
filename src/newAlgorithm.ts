class NewAlgorithm implements ValidationAlgorithm {
  validate(input: string): boolean {
    return input.length % 2 === 0;
  }
}

export default NewAlgorithm;