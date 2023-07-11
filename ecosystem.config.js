module.exports = {
    apps: [
        {
            // Name of app
            name: "WEB server bs-ms.pl",
            // Script for pm2 run forever
            script: "node_modules/next/dist/bin/next",
            // interpreter: "/bin/bash",
            args: "start -p 4000",
            error_file: "/apps/logs/web.err.log",
            cwd: "/apps/landing-page",
            ignore_watch: [
                "node_modules/",
                "public/",
                "pages/",
                "store/",
                "styles/",
                "ecosystem.config.js",
            ],
            autorestart: true,
            restart_delay: 1000,
            // cron_restart: '0 0 * * *',
            source_map_support: true,
            out_file: "/apps/logs/web.out.log",
            log_date_format: "YYYY-MM-DD HH:mm Z",
            // pid_file: "./logs/pids/app-pm_id.pid",
            exec_mode: "cluster",
            // pre_update: ["yarn build"],
            // Number of instances
            instances: '2',
            // watch: ["dist/"],
            max_memory_restart: "1G",
        },
    ],
};