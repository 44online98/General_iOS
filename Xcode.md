#Xcode
1)
    Cách xoá Derivered Data
    File ==> Project Setting ==> nhấn và dấu mũi tên màu xám, rồi xoá
2)   Pragma         Pragma Mark
    #pragma mark - is a great way to organize the code inside a class and helps you grouping methods implementation. We suggest to use #pragma mark -to separate:
    * methods in functional groupings
    * protocols implementations.
    * methods overridden from a superclass
    - (void)dealloc { /* ... */ }
    - (instancetype)init { /* ... */ }

    #pragma mark - View Lifecycle

    - (void)viewDidLoad { /* ... */ }
    - (void)viewWillAppear:(BOOL)animated { /* ... */ }
    - (void)didReceiveMemoryWarning { /* ... */ }

    #pragma mark - Custom Accessors

    - (void)setCustomProperty:(id)value { /* ... */ }
    - (id)customProperty { /* ... */ }

    #pragma mark - IBActions

    - (IBAction)submitData:(id)sender { /* ... */ }

    #pragma mark - Public

    - (void)publicMethod { /* ... */ }

    #pragma mark - Private

    - (void)zoc_privateMethod { /* ... */ }

    #pragma mark - UITableViewDataSource

    - (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath { /* ... */ }

    #pragma mark - ZOCSuperclass

    // ... overridden methods from ZOCSuperclass

    #pragma mark - NSObject

    - (NSString *)description { /* ... */ }




