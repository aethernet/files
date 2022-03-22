# files

Balena Block Simple File Manager

Will serve the content of a directory to the web using [serve-index](https://www.npmjs.com/package/serve-index)

# Usage

Add this block to your `docker-compose.yml`

```
volumes:
  files:

services:
  files:
    image: ./file-transfer
    restart: always
    volumes:
      - "files:/files"
    environement:
      - BROWSE_FOLDER=/files
    ports:
      - 80
```

Map the `files` volume to the other services who produces or consumes your files.

## Environement

Configure with :

- PORT: 80 # default to 80
- BROWSE_FOLDER: /usr/local/files
- UPLOAD_FOLDER: /usr/local/files/upload
- ALLOW_UPLOAD: 0 # for future vesion, no effect
- ALLOW_DELETE: 0 # for future vesion, no effect

# Based on

- express
- serve-index
- del

# Roadmap

- [x] List
- [x] Download
- [] Upload
- [] Delete
