const request = (path, method, body = null) => {
  return fetch(`${process.env.REACT_APP_API_URL}${path}`, {
    method,
    headers: body ? {
      'Content-Type': 'application/json'
    }: {},
    body: body ? JSON.stringify(body) : null,
    credentials: 'include'
  })
    .then(res => res.json());
}

export const post = (path, body) => request(path, 'POST', body);
export const get = path => request(path, 'GET');
export const patch = (path, body) => request(path, 'PATCH', body);
export const del = path => request(path, 'DELETE')
