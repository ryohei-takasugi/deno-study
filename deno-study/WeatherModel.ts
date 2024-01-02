export default interface Weathers {
  area: Area,
  weatherCodes: Array<string>,
  weathers: Array<string>,
  winds: Array<string>,
  waves: Array<string>
}

export interface Area {
  name: string,
  code: string
}