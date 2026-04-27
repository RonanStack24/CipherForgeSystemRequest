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
    <title>CipherForge Admin | Full Request Details</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #050505; color: #fff; margin: 0; }
        .glass { background: rgba(20, 20, 20, 0.6); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.05); }
        .gradient-text { background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
        
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeInUp 0.6s ease-out forwards; }
        
        tr { transition: all 0.3s ease; }
        tr:hover { background-color: rgba(99, 102, 241, 0.05) !important; }
    </style>
</head>
<body class="min-h-screen pb-12 bg-[#050505]">
    <div class="max-w-7xl mx-auto px-6 py-10">
        <!-- Header -->
        <header class="flex justify-between items-center mb-12 animate-fade-in">
            <div>
                <h1 class="text-4xl font-extrabold tracking-tight">System <span class="gradient-text">Requests</span></h1>
                <p class="text-zinc-500 mt-2 font-medium">Reviewing detailed client requirements and budgets.</p>
            </div>
            <div class="flex items-center gap-3">
                <a href="../" class="px-5 py-2.5 glass hover:bg-white/5 rounded-xl text-sm font-bold transition-all text-zinc-400">View Site</a>
                <a href="?action=clear" onclick="return confirm('Delete ALL data?')" class="px-5 py-2.5 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 rounded-xl text-sm font-bold">Clear All</a>
            </div>
        </header>

        <!-- Search -->
        <div class="relative mb-8 animate-fade-in" style="animation-delay: 0.1s;">
            <input type="text" id="searchInput" onkeyup="filterRequests()" placeholder="Search clients, descriptions, or project types..." 
                   class="w-full glass rounded-2xl px-12 py-4 text-white focus:ring-2 focus:ring-[#6366f1]/50 outline-none transition-all">
            <span class="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">🔍</span>
        </div>

        <!-- Table -->
        <div class="glass rounded-[2rem] overflow-hidden shadow-3xl animate-fade-in" style="animation-delay: 0.2s;">
            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse" id="requestsTable">
                    <thead>
                        <tr class="bg-white/5 text-zinc-400 text-xs uppercase tracking-[0.2em] border-b border-white/5">
                            <th class="px-8 py-6 font-bold">Client & Project</th>
                            <th class="px-8 py-6 font-bold">Details & Budget</th>
                            <th class="px-8 py-6 font-bold text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-white/5">
                        <?php
                        if (file_exists($file)) {
                            $requests = json_decode(file_get_contents($file), true) ?? [];
                            if (!empty($requests)) {
                                $displayRequests = array_reverse($requests, true);
                                foreach ($displayRequests as $id => $req) {
                                    $date = isset($req['submitted_at']) ? date('M d, Y • H:i', strtotime($req['submitted_at'])) : 'N/A';
                                    $name = htmlspecialchars($req['fullName'] ?? 'N/A');
                                    $email = htmlspecialchars($req['email'] ?? 'N/A');
                                    $contact = htmlspecialchars($req['contact'] ?? 'N/A');
                                    $type = htmlspecialchars($req['projectType'] ?? 'N/A');
                                    $desc = htmlspecialchars($req['description'] ?? 'No description provided.');
                                    $budget = htmlspecialchars($req['budget'] ?? 'Not set');
                                    $timeline = htmlspecialchars($req['timeline'] ?? 'Not set');
                                    
                                    echo "<tr>";
                                    echo "<td class='px-8 py-8 align-top w-1/3'>";
                                    echo "  <div class='text-zinc-500 text-[10px] uppercase font-black mb-2 tracking-widest'>$date</div>";
                                    echo "  <div class='font-bold text-white text-xl'>$name</div>";
                                    echo "  <div class='text-[#6366f1] font-medium'>$email</div>";
                                    echo "  <div class='text-zinc-500 text-sm mt-1'>$contact</div>";
                                    echo "  <div class='mt-4'><span class='bg-[#6366f1]/10 px-3 py-1 rounded-full text-[#6366f1] text-[10px] uppercase font-bold border border-[#6366f1]/20'>$type</span></div>";
                                    echo "</td>";
                                    echo "<td class='px-8 py-8 align-top'>";
                                    echo "  <div class='flex gap-2 mb-4'>";
                                    echo "    <div class='bg-green-500/10 text-green-500 px-2 py-1 rounded text-[10px] font-bold border border-green-500/10'>BUDGET: $budget</div>";
                                    echo "    <div class='bg-orange-500/10 text-orange-500 px-2 py-1 rounded text-[10px] font-bold border border-orange-500/10'>TIMELINE: $timeline</div>";
                                    echo "  </div>";
                                    echo "  <div class='text-zinc-400 text-sm leading-relaxed italic border-l-2 border-white/5 pl-4'>\"$desc\"</div>";
                                    echo "</td>";
                                    echo "<td class='px-8 py-8 text-right align-top'>";
                                    echo "  <a href='?action=delete&id=$id' onclick=\"return confirm('Delete?')\" class='bg-red-500/10 hover:bg-red-500/20 text-red-500 px-4 py-2 rounded-lg transition-all font-bold text-xs uppercase border border-red-500/10'>Delete</a>";
                                    echo "</td>";
                                    echo "</tr>";
                                }
                            } else {
                                echo "<tr><td colspan='3' class='px-8 py-20 text-center text-zinc-500 italic'>No requests found in database.</td></tr>";
                            }
                        }
                        ?>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Footer -->
        <footer class="mt-12 flex justify-between items-center text-zinc-600 text-xs px-6">
            <div>&copy; 2026 CipherForge Security Systems</div>
            <button onclick="window.print()" class="hover:text-zinc-400 font-bold uppercase tracking-widest transition-colors">Print / Save PDF</button>
        </footer>
    </div>

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
