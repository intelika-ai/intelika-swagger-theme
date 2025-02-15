import { join } from 'node:path'
import { promises as fsPromises, readFileSync } from 'node:fs'

const PATH = join(__dirname, '..', 'assets', 'selorex-swagger.css')

/**
 * Reads the content of the theme file asynchronously.
 * @returns {Promise<Buffer>} The content of the file as a Buffer.
 * @throws {Error} If there is an error reading the file.
 */
export async function getThemeAsync(): Promise<Buffer> {
  try {
    return await fsPromises.readFile(PATH)
  } catch (error) {
    console.error('Error reading file:', error)
    throw error
  }
}

/**
 * Reads the content of the theme file synchronously.
 * @returns {Buffer} The content of the file as a Buffer.
 * @throws {Error} If there is an error reading the file.
 */
export function getThemeSync(): Buffer {
  try {
    const content = readFileSync(PATH)
    return content
  } catch (error) {
    console.error('Error reading file:', error)
    throw error
  }
}
