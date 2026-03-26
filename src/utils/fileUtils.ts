/** Déduit un label lisible depuis un chemin de fichier */
export function extractNameFromPath(filePath: string): string {
  const fileName = filePath.split('/').pop() || filePath
  return fileName.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')
}

/** Déduit le type de fichier depuis l'extension */
export function getFileType(filePath: string): string {
  const ext = (filePath.split('.').pop() ?? '').toLowerCase()
  const map: Record<string, string> = {
    pdf:  'PDF',
    png:  'Image',
    jpg:  'Image',
    jpeg: 'Image',
    webp: 'Image',
  }
  return map[ext] ?? 'Fichier'
}
