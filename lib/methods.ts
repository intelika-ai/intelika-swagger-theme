import { join } from 'node:path'
import { promises as fsPromises, readFileSync } from 'node:fs'

const PATH = join(__dirname, '..', 'assets', 'selorex-swagger.css')

export async function getThemeAsync(): Promise<Buffer> {
  try {
    return await fsPromises.readFile(PATH)
  } catch (error) {
    console.error('Error reading file:', error)
    throw error
  }
}

export function getTheme(): Buffer {
  try {
    const content = readFileSync(PATH)
    console.log('CONTENT: ', content.slice(0, 10))
    return content
  } catch (error) {
    console.error('Error reading file:', error)
    throw error
  }
}
