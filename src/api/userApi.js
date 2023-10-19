import { baseApi } from "./baseApi";

export const userApi = ([...props]) => {
  let typeProps = typeof props[0];

  switch (typeProps) {
    case 'string':
      if (props.length == 1) {
        return `${baseApi}users?username=${props}`
      } else {
        return `${baseApi}users?username=` + props.join('&username=')
      }
    case 'number':
      if (props.length == 1) {
        return `${baseApi}users?id=${props}`
      } else {
        return `${baseApi}users?id=` + props.join('&id=')
      }
  }
}