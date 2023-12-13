export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Headshot.jpg","favicon.png","icons/Windows 7 Accessibility.png","icons/Windows 7 Action Center.png","icons/Windows 7 Alert.png","icons/Windows 7 Application.png","icons/Windows 7 Bad Folder.png","icons/Windows 7 Batch File.png","icons/Windows 7 Big Red X.png","icons/Windows 7 CD File.png","icons/Windows 7 Cabinet.png","icons/Windows 7 Calculator.png","icons/Windows 7 Calendar Window.png","icons/Windows 7 Camera.png","icons/Windows 7 Check.png","icons/Windows 7 Chip.png","icons/Windows 7 Clear Folder.png","icons/Windows 7 Compressed Archive.png","icons/Windows 7 Computer Information.png","icons/Windows 7 Connect to Internet.png","icons/Windows 7 Contacts.png","icons/Windows 7 Control Panel.png","icons/Windows 7 Critical.png","icons/Windows 7 Cyan Check.png","icons/Windows 7 DLL file.png","icons/Windows 7 Deflag.png","icons/Windows 7 Desktop Folder.png","icons/Windows 7 Desktop.png","icons/Windows 7 Device Center.png","icons/Windows 7 Disallow.png","icons/Windows 7 Disc Drive.png","icons/Windows 7 Disc.png","icons/Windows 7 Display Size.png","icons/Windows 7 Document.png","icons/Windows 7 Download.png","icons/Windows 7 Earth.png","icons/Windows 7 Eighth Note.png","icons/Windows 7 Empty Drive.png","icons/Windows 7 Event Log.png","icons/Windows 7 External Disc Drive.png","icons/Windows 7 Favourite Star.png","icons/Windows 7 File.png","icons/Windows 7 Flash Drive.png","icons/Windows 7 Floppy Drive.png","icons/Windows 7 Folder Back Half.png","icons/Windows 7 Folder Front Half.png","icons/Windows 7 Folder.png","icons/Windows 7 Font Folder.png","icons/Windows 7 Game Console.png","icons/Windows 7 Game Controller.png","icons/Windows 7 Games.png","icons/Windows 7 Hard Drive.png","icons/Windows 7 Help.png","icons/Windows 7 History.png","icons/Windows 7 Hub.png","icons/Windows 7 INI File.png","icons/Windows 7 Image File.png","icons/Windows 7 Information.png","icons/Windows 7 Installation Window.png","icons/Windows 7 Installation.png","icons/Windows 7 Internet Diagnosis.png","icons/Windows 7 Internet Explorer File.png","icons/Windows 7 Internet Explorer.png","icons/Windows 7 Junction.png","icons/Windows 7 Key.png","icons/Windows 7 Keyboard and Mouse.png","icons/Windows 7 Keyboard.png","icons/Windows 7 Keys.png","icons/Windows 7 Laptop PC.png","icons/Windows 7 Library Document.png","icons/Windows 7 Library Music.png","icons/Windows 7 Library Picture.png","icons/Windows 7 Library Videos.png","icons/Windows 7 Library.png","icons/Windows 7 Logo.png","icons/Windows 7 Magnify.png","icons/Windows 7 Management Tool.png","icons/Windows 7 Marked Alert.png","icons/Windows 7 Marked Audio.png","icons/Windows 7 Marked Busy.png","icons/Windows 7 Marked Check.png","icons/Windows 7 Marked Download.png","icons/Windows 7 Marked Gray X.png","icons/Windows 7 Marked Shortcut.png","icons/Windows 7 Media Disk.png","icons/Windows 7 Media File.png","icons/Windows 7 Mobile Phone.png","icons/Windows 7 Monitor.png","icons/Windows 7 Mouse.png","icons/Windows 7 Movie Clip.png","icons/Windows 7 Movie File.png","icons/Windows 7 My Document.png","icons/Windows 7 My Favorites.png","icons/Windows 7 My Music.png","icons/Windows 7 My Network.png","icons/Windows 7 My Picture.png","icons/Windows 7 My Videos.png","icons/Windows 7 Network.png","icons/Windows 7 Notepad.png","icons/Windows 7 Package.png","icons/Windows 7 Padlock.png","icons/Windows 7 Pause.png","icons/Windows 7 Photo Frame.png","icons/Windows 7 Picture 1.png","icons/Windows 7 Picture 2.png","icons/Windows 7 Picture 3.png","icons/Windows 7 Picture 4.png","icons/Windows 7 Picture 5.png","icons/Windows 7 Portable Music Player.png","icons/Windows 7 Power.png","icons/Windows 7 Printer.png","icons/Windows 7 Remote.png","icons/Windows 7 Router.png","icons/Windows 7 Run.png","icons/Windows 7 Screensaver.png","icons/Windows 7 Search Folder.png","icons/Windows 7 Search.png","icons/Windows 7 Server Casing.png","icons/Windows 7 Server.png","icons/Windows 7 Shared.png","icons/Windows 7 Shield Administrator.png","icons/Windows 7 Shield Alert.png","icons/Windows 7 Shield Check.png","icons/Windows 7 Shield Critical.png","icons/Windows 7 Shield Help.png","icons/Windows 7 Shield Windows.png","icons/Windows 7 Single Bar Note.png","icons/Windows 7 Sleep.png","icons/Windows 7 Small Gears.png","icons/Windows 7 Snipping Tool.png","icons/Windows 7 Sound File.png","icons/Windows 7 Sound.png","icons/Windows 7 Speaker.png","icons/Windows 7 Sticky Note.png","icons/Windows 7 Stopwatch.png","icons/Windows 7 Stylus.png","icons/Windows 7 Sync.png","icons/Windows 7 System Drive.png","icons/Windows 7 TV Screen.png","icons/Windows 7 Tablet PC.png","icons/Windows 7 Tablet.png","icons/Windows 7 Task Bar and Start Menu.png","icons/Windows 7 Text Document.png","icons/Windows 7 Text File.png","icons/Windows 7 Theme Package.png","icons/Windows 7 Theme.png","icons/Windows 7 Time and Date.png","icons/Windows 7 Trash Can (Empty).png","icons/Windows 7 Trash Can (Full).png","icons/Windows 7 Troubleshooting.png","icons/Windows 7 User Folder.png","icons/Windows 7 User.png","icons/Windows 7 Vault.png","icons/Windows 7 Vista Folder.png","icons/Windows 7 WebCam.png","icons/Windows 7 Windows Media Player.png","icons/Windows 7 Windows Update.png","icons/Windows 7 Wireless.png","icons/Windows 7 XBox 360.png","icons/Windows 7 XML File.png","icons/Windows 7 ZIP File.png","icons/preview.png","prompt.txt"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.3ee67ed5.js","app":"_app/immutable/entry/app.1b753b29.js","imports":["_app/immutable/entry/start.3ee67ed5.js","_app/immutable/chunks/scheduler.a629d90a.js","_app/immutable/chunks/singletons.fb01cbc6.js","_app/immutable/chunks/paths.26c4ee27.js","_app/immutable/entry/app.1b753b29.js","_app/immutable/chunks/scheduler.a629d90a.js","_app/immutable/chunks/index.0dcb5595.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
