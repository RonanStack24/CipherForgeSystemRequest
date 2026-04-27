<?php
// Configuration
$file = 'requests.json';

// Handle Actions (Delete / Clear)
if (isset($_GET['action'])) {
    if ($_GET['action'] === 'clear') {
        file_put_contents($file, json_encode([]));
        header('Location: dashboard.php?msg=cleared');
        exit;
    }
    if ($_GET['action'] === 'delete' && isset($_GET['id'])) {
        if (file_exists($file)) {
            $requests = json_decode(file_get_contents($file), true) ?? [];
            $id = (int)$_GET['id'];
            if (isset($requests[$id])) {
                unset($requests[$id]);
                $requests = array_values($requests);
                file_put_contents($file, json_encode($requests, JSON_PRETTY_PRINT));
            }
        }
        header('Location: dashboard.php?msg=deleted');
        exit;
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CipherForge Admin | Security Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #050505; color: #fff; margin: 0; }
        .glass { background: rgba(20, 20, 20, 0.6); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.05); }
        .gradient-text { 
            background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%); 
            -webkit-background-clip: text; 
            background-clip: text; 
            -webkit-text-fill-color: transparent; 
        }
    </style>
</head>
<body class="min-h-screen pb-12 bg-[#050505]">
    <div class="max-w-7xl mx-auto px-6 py-10">
        <!-- Header -->
        <header class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
                <h1 class="text-4xl font-extrabold tracking-tight">Admin <span class="gradient-text">Dashboard</span></h1>
                <p class="text-zinc-500 mt-2 font-medium">Monitoring secure system requests and project inquiries.</p>
            </div>
            
            <div class="flex items-center gap-3">
                <a href="../" class="px-5 py-2.5 glass hover:bg-white/5 rounded-xl text-sm font-bold transition-all text-zinc-400">View Website</a>
                <a href="?action=clear" onclick="return confirm('WARNING: Delete ALL data?')" 
                   class="px-5 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 rounded-xl text-sm font-bold transition-all">
                    Clear Data
                </a>
            </div>
        </header>

        <!-- Search -->
        <div class="relative mb-8">
            <input type="text" id="searchInput" onkeyup="filterRequests()" placeholder="Search clients or project types..." 
                   class="w-full glass rounded-2xl px-12 py-4 text-white focus:ring-2 focus:ring-[#6366f1]/50 outline-none transition-all">
            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">🔍</span>
        </div>

        <!-- Table -->
        <div class="glass rounded-[2rem] overflow-hidden shadow-3xl">
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse" id="requestsTable">
                    <thead>
                        <tr class="bg-white/5 text-zinc-400 text-xs uppercase tracking-[0.2em] border-b border-white/5">
                            <th class="px-8 py-6 font-bold">Timestamp</th>
                            <th class="px-8 py-6 font-bold">Client Information</th>
                            <th class="px-8 py-6 font-bold text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-white/5">
                        <?php
                        if (file_exists($file)) {
                            $content = file_get_contents($file);
                            $requests = json_decode($content, true) ?? [];
                            if (!empty($requests)) {
                                $displayRequests = array_reverse($requests, true);
                                foreach ($displayRequests as $id => $req) {
                                    $date = isset($req['submitted_at']) ? date('M d, Y • H:i', strtotime($req['submitted_at'])) : 'N/A';
                                    $name = htmlspecialchars($req['fullName'] ?? 'N/A');
                                    $email = htmlspecialchars($req['email'] ?? 'N/A');
                                    $type = htmlspecialchars($req['projectType'] ?? 'N/A');
                                    
                                    echo "<tr class='hover:bg-white/[0.02] transition-colors'>";
                                    echo "<td class='px-8 py-6 text-zinc-500 text-sm'>$date</td>";
                                    echo "<td class='px-8 py-6'>
                                            <div class='font-bold text-white text-lg'>$name</div>
                                            <div class='text-sm text-[#6366f1]'>$email</div>
                                            <div class='mt-1'><span class='text-[10px] bg-[#6366f1]/10 px-2 py-0.5 rounded text-[#6366f1] uppercase font-bold border border-[#6366f1]/20'>$type</span></div>
                                          </td>";
                                    echo "<td class='px-8 py-6 text-right'>
                                            <a href='?action=delete&id=$id' onclick=\"return confirm('Delete?')\" class='bg-red-500/10 hover:bg-red-500/20 text-red-500 px-4 py-2 rounded-lg transition-all font-bold text-xs uppercase border border-red-500/10'>Delete</a>
                                          </td>";
                                    echo "</tr>";
                                }
                            } else {
                                echo "<tr><td colspan='3' class='px-8 py-20 text-center text-zinc-500 italic'>No requests found in database.</td></tr>";
                            }
                        } else {
                            echo "<tr><td colspan='3' class='px-8 py-20 text-center text-zinc-500 italic'>Database file not yet created. Waiting for first submission.</td></tr>";
                        }
                        ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <footer class="mt-12 flex justify-between items-center text-zinc-600 text-xs px-6 max-w-7xl mx-auto">
        <div>&copy; 2026 CipherForge Security Systems • Proprietary Dashboard</div>
        <div class="flex gap-4">
            <button onclick="window.print()" class="hover:text-zinc-400 transition-colors font-bold uppercase tracking-widest">Print / Save as PDF</button>
        </div>
    </footer>

    <script>
        function filterRequests() {
            var input = document.getElementById("searchInput");
            var filterValue = input.value.toUpperCase();
            var rows = document.getElementById("requestsTable").getElementsByTagName("tr");
            for (var i = 1; i < rows.length; i++) {
                var content = rows[i].textContent || rows[i].innerText;
                rows[i].style.display = content.toUpperCase().indexOf(filterValue) > -1 ? "" : "none";
            }
        }
    </script>
</body>
</html>
