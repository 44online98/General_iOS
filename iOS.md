# iOS 
1) Khác nhau giữa clipsToBounds và  masksToBounds

    _clipsToBounds sử dụng cho View

    _masksToBounds sử dụng cho CALayer

    _trong hàm clipsToBounds nó đã chứa masksToBounds

2) Methods to Override of UIView

    _Initialization:

        +initWithFrame

        +nitWithCoder

        +layerClass

    _Drawing and printing:

        +drawRect

        +drawRect:forViewPrintFormatter

        +initWithFrame

    _Constraints:

        +requiresConstraintBasedLayout

        +updateConstraints

        +alignmentRectForFrame:, frameForAlignmentRect:

    _Layout:

        +sizeThatFits

        +layoutSubviews

        +didAddSubview:, willRemoveSubview:

        +willMoveToSuperview:, didMoveToSuperview

        +willMoveToWindow:, didMoveToWindow

    _Event Handling:

        +touchesBegan:withEvent:, touchesMoved:withEvent:, touchesEnded:withEvent:

        +gestureRecognizerShouldBegin

    _Chi tiết tại:

        +http://stackoverflow.com/questions/15978370/proper-practice-for-subclassing-uiview

        +https://www.quora.com/Cocoa-API-What-is-the-difference-between-initWithCoder-initWithNibName-and-awakeFromNib-1
3)
https://kipalog.com/posts/Cac-thuoc-tinh-cua-property-trong-objective-c
    _Stack:

        +Stack là vùng bộ nhớ để chứa biến local, biến tạm. Khi bạn tạo ra đối tượng và được lưu trên stack thì việc quản lý bộ nhớ diễn ra một cách tự động. Thế nên bạn không phải bận tâm đến vấn đề memory leak.

    _Heap:
        +Vùng bộ nhớ mà bạn muốn sử dụng tự phải cấp phát và giải phóng khi cần thiết. Bạn trực tiếp quản lý nó, thế nên khả năng rò rỉ bộ nhớ có thể xảy ra. Như C, ta đã malloc thì phải free. Vấn đề này dễ thở hơn khi sử dụng JAVA hay Obj-C (cơ chế garbage collection).
Lợi thế trong việc sử dụng stack là tốc độ nhanh, sự đơn giản (tự động hủy khi hàm return hoặc khi ra khỏi scope). Tuy nhiên, khi lập trình chúng ta có xu hướng muốn quản lý lifetime của đối tượng, thế nên ta sử dụng heap khá thường xuyên.

Đối tượng trong obj-c thì hầu hết được lưu ở heap. Apple dịu dàng nghĩ ra strong, weak, copy, assign để coder quản lý bộ nhớ thuận tiện hơn (nhờ ARC). Nhưng nhiều thuộc tính như thế dễ làm coder băn khoăn cái nào nên dùng, cái nào không.
4)  Khác nhau giữa CPU và GPU

    GPU  là các con chíp xử lý  đồ hoạ

    ....

    http://vforum.vn/diendan/showthread.php?72124-CPU-GPU-la-gi-Su-khac-nhau-giua-CPU-va-CPU

5)  Khác nhau giữa atomic và nonatomic

    +atomic là thằng default behavior , thread-safe , not fast

    +non-atomic là thằng default behavior(created using @property and @synthesize) , NOT thread-safe ,  fast

    http://stackoverflow.com/questions/588866/whats-the-difference-between-the-atomic-and-nonatomic-attributes
6)
Alloc : Class method of NSObject. Returns a new instance of the receiving class.

Init : Instance method of NSObject. Implemented by subclasses to initialize a new object (the receiver) immediately after memory for it has been allocated.

New : Class method of NSObject. Allocates a new instance of the receiving class, sends it an init message, and returns the initialized object.

Release : Instance method of NSObject delegate. Decrements the receiver’s reference count.

Autorelease : Instance method of NSObject delegate. Adds the receiver to the current autorelease pool.

Retain: Instance method of NSObject delegate. Increments the receiver’s reference count.

Copy : Instance method of NSObject delegate. Returns a new instance that’s a copy of the receiver.

So to conclude we can say that

alloc goes with init

new = alloc + init
7)
    Thứ tự set text cho label, case multi lines
        + set text
        + set width
        + set numberOfLines = 0
        + set sizeToFit()
        + set right, left

8)
    viewWillDisappear
     + if call view.endEditing(true) ==> hidden keyboard (NStificationCenter hiddenKeyboard)
    viewDidDisappear
    + if call view.endEditing(true) ==> not hidden keyboard
9)
    setting colletionView by Coding
    for Vertical and Horizontal
        + layout  [seaction Insets, Min Spacing, Content Insets]
        + scroll direction
        + scroll indicator
        + bounce
10)
    file .p12 được export từ Distribution file
    để dùng cho nhiều người
11)
    podFile của CocoaPod  không phải là file text
12)
    annotationView in mapView
    // If YES, a standard callout bubble will be shown when the annotation is selected.
    // The annotation must have a title for the callout to be shown.
    open var canShowCallout: Bool
    DateFormatter YYYY sẽ dễ sai
    xài yyyy thì bình thường, cần tìm hiểu lại YYYY là gì
    UILabel, set text for label have '```' at the end
    nameLabel.adjustsFontSizeToFitWidth = false
    nameLabel.lineBreakMode = .byTruncatingTail
    case byWordWrapping // Wrap at word boundaries, default

    case byCharWrapping // Wrap at character boundaries

    case byClipping // Simply clip

    case byTruncatingHead // Truncate at head of line: "...wxyz"

    case byTruncatingTail // Truncate at tail of line: "abcd..."

    case byTruncatingMiddle // Truncate middle of line:  "ab...yz"





