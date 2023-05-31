// opvOoJ4b9dtIe0IanqJU;
const BASE_URL = 'https://the-one-api.dev/v2/';
const END_POINT = 'character';
const KEY = 'opvOoJ4b9dtIe0IanqJU';

function getCharacter() {
  const param = new URLSearchParams({
    limit: 30,
    page: 1,
  });
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${KEY}`,
    },
  };

  fetch(`${BASE_URL}${END_POINT}${param}`, options).then(resp =>
    console.log(resp)
  );
}
getCharacter();
