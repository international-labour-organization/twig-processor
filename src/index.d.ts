import { PluginOption } from "vite"

declare module "twig-processor" {
  interface PluginParams {
    namespaces: Record<string, string>
    functions: Record<string, Function>
    globalContext: Record<string, unknown>
  }
  function twig(args: PluginParams): PluginOption

  export default twig
}
