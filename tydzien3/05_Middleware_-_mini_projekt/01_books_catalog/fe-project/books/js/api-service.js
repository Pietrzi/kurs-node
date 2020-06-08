class ApiService {
  constructor(endpointUrl) {
    this.endpointUrl = endpointUrl;
  }

  booksGetRequest() {
    /* ADD CODE HERE */
    return fetch(`${this.endpointUrl}/books`/* ADD CODE HERE */).then((response) => response.json());
  }

  booksDeleteRequest(id) {
    /* ADD CODE HERE */
    const requestOptions = {
      method: 'DELETE',
    };

    return fetch(`${this.endpointUrl}/books/${id}`,
    requestOptions,/* ADD CODE HERE */).then((response) => response.json());
  }

  booksPutRequest(book) {
    /* ADD CODE HERE */
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    const urlencoded = new URLSearchParams();
    urlencoded.append('year', book.year);
    urlencoded.append('author', book.author);
    urlencoded.append('title', book.title);

    const requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: urlencoded,
    };

    return fetch(`${this.endpointUrl}/books/${book.id}`,
      requestOptions,/* ADD CODE HERE */).then((response) => response.json());
  }

  booksPostRequest(book) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(book),
    };

    /* ADD CODE HERE */

    return fetch(`${this.endpointUrl}/books/${book.id}`,
      requestOptions,/* ADD CODE HERE */).then((response) => response.json());
  }
}
module.exports = ApiService;