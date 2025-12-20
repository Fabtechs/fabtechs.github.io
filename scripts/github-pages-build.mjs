import { spawn } from 'node:child_process'

const baseFlag = process.argv.find((arg) => arg.startsWith('--base='))
const resolvedBase = baseFlag ? baseFlag.split('=')[1] : process.env.NUXT_APP_BASE_URL || '/'

const command = process.platform === 'win32' ? 'npx.cmd' : 'npx'
const args = ['nuxi', 'generate']

const child = spawn(command, args, {
  stdio: 'inherit',
  env: {
    ...process.env,
    NUXT_APP_BASE_URL: resolvedBase,
    NITRO_PRESET: 'github-pages'
  }
})

child.on('close', (code) => {
  process.exit(code ?? 0)
})
