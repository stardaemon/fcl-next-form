class Batch {
  private model: string
  private quantity: number
  private submitedDate: string
  private randomNumber: string
  private machineNumbers: Array<any>

  constructor(parameters:any) {
    this.model = parameters.model
    this.quantity = parameters.quantity
    this.submitedDate = parameters.submitedDate
    this.randomNumber = parameters.randomNumber
    this.machineNumbers = Array.apply(null, Array(Number(this.quantity))).map(function () {
      return {
        model: parameters.model,
        submitedDate: parameters.submitedDate,
        randomNumber: parameters.randomNumber,
      }
    })
  }

  get = () => {
    return {
      model: this.model,
      quantity: this.quantity,
      submitedDate: this.submitedDate,
      randomNumber: this.randomNumber,
    }
  }

  getMachineNumbers = () => {
    return this.machineNumbers;
  }

}

export default Batch;