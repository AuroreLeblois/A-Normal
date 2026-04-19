export interface ResourceFile {
  path: string
  icon: string
  label?: string
}

export interface Section {
  id: string
  title: string
  description?: string
  direction?: "left" | "right" | "top" | "bottom"
  delay?: number
  icon: string
  files: ResourceFile[]
  placeholder?: string
}

export interface ResourcesConfig {
  sections: Section[]
}
