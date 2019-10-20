# Angular Plugins Tutorial
### Dynamic routing with external and internal plugins

This project shows Angular's capabilities in creating extensible applications.  
With the help of so-called "plugins" we can freely extend existing production applications.    
Knowing only the name of the "Plugin" compressed file and the name of the main Module.

## Prerequisites
- installed Node with v12.3.1+
- installed Angular CLI v8.2+

## Definitions of projects
- `root` - Root application project. Application that will be expanded.
- `root/projects` - Place for source code for internal plugins created by `ng create liblary ...` (_First way_)
- `plugins-config` - Small application aimed at serving configuration data and plugin files.
- `external-plugins/projects` - Place for source files for external plugins (_Second way_)

## Configuration and Steps for plugins dynamic routing
1. Go to directory `root`
2. Run command `ng serve`
3. Open your browser with link http://localhost:4200/ (it should no display any loaded plugins on list)

4. Go to directory `plugins-config`
5. Run command `http-server -p 8080 --cors`

6. Run command (still on `root` directory) `ng build plugin-a`
7. copy bundled file `dist/plugin-a/bundles/plugin-a.umd.js` to `plugins-config/plugins` directory

8. Press `F5` on browser with loaded application (plugin a should be displayed on list of plugins routes links)
9. Click on `Plugin a` link to check if plugin works will be loaded correctly.

10 For external plugins do the same as in points 4-7 but start from `external-plugins` directory.

## Configuration and steps for plugin current component injection
1. Checkout to feature-injecting-plugin-component` branch.

2. Run command (still on `root` directory) `ng build plugin-a`
3. copy bundled file `dist/plugin-a/bundles/plugin-a.umd.js` to `plugins-config/plugins` directory

4. Go to directory `plugins-config`
5. Run command `http-server -p 8080 --cors`

7. Go to directory `root`
8. Run command `ng serve`
