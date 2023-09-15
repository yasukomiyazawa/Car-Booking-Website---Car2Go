"use strict";
/* eslint-disable no-underscore-dangle, @typescript-eslint/no-explicit-any */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyRequireHooks = exports.overrideRequireHooks = void 0;
// This is a modified version of the require hooks from Next.js
// https://github.com/vercel/next.js/blob/b04c70573ac199a9bb3ea42201e0865e610d5b67/packages/next/src/server/require-hook.ts
const module_1 = __importDefault(require("module"));
const resolveFilename = module_1.default._resolveFilename;
const requireHooks = new Map();
const overrideRequireHooks = (config) => {
    setRequireHooks(config);
    resolveRequireHooks();
};
exports.overrideRequireHooks = overrideRequireHooks;
const setRequireHooks = (config) => {
    requireHooks.set('default', new Map([
        ['react', `react`],
        ['react/jsx-runtime', `react/jsx-runtime`],
    ]));
    if (config.experimental.appDir) {
        if (config.experimental.serverActions) {
            requireHooks.set('experimental', new Map([
                ['react', `next/dist/compiled/react-experimental`],
                ['react/jsx-runtime', `next/dist/compiled/react-experimental/jsx-runtime`],
                ['react/jsx-dev-runtime', `next/dist/compiled/react-experimental/jsx-dev-runtime`],
                ['react-dom', `next/dist/compiled/react-dom-experimental/server-rendering-stub`],
                ['react-dom/client', `next/dist/compiled/react-dom-experimental/client`],
                ['react-dom/server', `next/dist/compiled/react-dom-experimental/server`],
                ['react-dom/server.browser', `next/dist/compiled/react-dom-experimental/server.browser`],
                ['react-dom/server.edge', `next/dist/compiled/react-dom-experimental/server.edge`],
                ['react-server-dom-webpack/client', `next/dist/compiled/react-server-dom-webpack-experimental/client`],
                [
                    'react-server-dom-webpack/client.edge',
                    `next/dist/compiled/react-server-dom-webpack-experimental/client.edge`,
                ],
                [
                    'react-server-dom-webpack/server.edge',
                    `next/dist/compiled/react-server-dom-webpack-experimental/server.edge`,
                ],
                [
                    'react-server-dom-webpack/server.node',
                    `next/dist/compiled/react-server-dom-webpack-experimental/server.node`,
                ],
                ['styled-jsx', 'styled-jsx'],
                ['styled-jsx/style', 'styled-jsx/style'],
            ]));
        }
        else {
            requireHooks.set('next', new Map([
                ['react', `next/dist/compiled/react`],
                ['react/jsx-runtime', `next/dist/compiled/react/jsx-runtime`],
                ['react/jsx-dev-runtime', `next/dist/compiled/react/jsx-dev-runtime`],
                ['react-dom', `next/dist/compiled/react-dom/server-rendering-stub`],
                ['react-dom/client', `next/dist/compiled/react-dom/client`],
                ['react-dom/server', `next/dist/compiled/react-dom/server`],
                ['react-dom/server.browser', `next/dist/compiled/react-dom/server.browser`],
                ['react-dom/server.edge', `next/dist/compiled/react-dom/server.edge`],
                ['react-server-dom-webpack/client', `next/dist/compiled/react-server-dom-webpack/client`],
                ['react-server-dom-webpack/client.edge', `next/dist/compiled/react-server-dom-webpack/client.edge`],
                ['react-server-dom-webpack/server.edge', `next/dist/compiled/react-server-dom-webpack/server.edge`],
                ['react-server-dom-webpack/server.node', `next/dist/compiled/react-server-dom-webpack/server.node`],
                ['styled-jsx', 'styled-jsx'],
                ['styled-jsx/style', 'styled-jsx/style'],
            ]));
        }
    }
};
const resolveRequireHooks = () => {
    // we may have changed the working directory in the handler
    const opts = { paths: [process.cwd()] };
    // resolve require hooks with module paths
    requireHooks.forEach((mode) => {
        mode.forEach((path, hook) => {
            try {
                const resolvedPath = require.resolve(path, opts);
                mode.set(hook, resolvedPath);
            }
            catch (error) {
                if (error.code === 'MODULE_NOT_FOUND') {
                    // module not present (older version of Next.js)
                    mode.delete(hook);
                }
                else {
                    throw error;
                }
            }
        });
    });
};
const applyRequireHooks = () => {
    // eslint-disable-next-line max-params, func-names
    ;
    module_1.default._resolveFilename = function (originalResolveFilename, hooks, request, parent, isMain, options) {
        var _a, _b;
        const reactMode = process.env.__NEXT_PRIVATE_PREBUNDLED_REACT || 'default';
        const resolvedRequest = (_b = (_a = hooks.get(reactMode)) === null || _a === void 0 ? void 0 : _a.get(request)) !== null && _b !== void 0 ? _b : request;
        return originalResolveFilename.call(module_1.default, resolvedRequest, parent, isMain, options);
        // We use `bind` here to avoid referencing outside variables to create potential memory leaks.
    }.bind(null, resolveFilename, requireHooks);
};
exports.applyRequireHooks = applyRequireHooks;
/* eslint-enable no-underscore-dangle, @typescript-eslint/no-explicit-any */
