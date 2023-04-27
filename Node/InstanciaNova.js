// uma factory retorna um novo obejto

module.exports = () => {
  return {
    valor: 1,
    inc() {
      this.valor++
    }
  }
}
